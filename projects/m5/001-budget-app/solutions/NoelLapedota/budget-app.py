
class Category:
    
  
      
    def __init__(self, name):
            self.ledger = []
            self.name = name
            self.withdrawals = []   # for withdrawals, it is used for the second part of the exercise

            

    def deposit(self, amount, description= ''):
            self.description = description
            self.ledger.append({'amount': amount, 'description': description})
            

    def withdraw(self, amount, description= ''):
            self.amount = amount
            if self.check_funds(amount):             #  i call another method
                self.ledger.append({'amount': -abs(amount), 'description': description})
                self.withdrawals.append([amount])    # I note withdrawals with ok here
                return True
            return False
        
    def __str__(self):
         title = (f'{self.name.center(30, "*")}\n')
         for index in self.ledger:
           title += (f"{index['description'][0:23]}".ljust(23))
           title += (f"{index['amount']:.2f}".rjust(7) + "\n")
         balance =f"Tot: {self.get_balance()}"
         title += balance
         return title 

         
    def get_balance(self):
        balance = 0
        for price in self.ledger:
            balance += float(price['amount']) 
        return   balance 

    def check_funds(self, amount):
        if amount > self.get_balance():
            return False
        return True  

    def transfer(self, amount,category):
        if self.check_funds(amount):
           self.withdraw(amount, f"Transfer to {category}")
           self.deposit(amount, f"Transfer to {category}")  
           return True
        return False   
        
                
         
      
def create_spend_chart(categories):
     # Create a string chart representing the percentage of the expenses for every category
    money_for_cat = []
    cost_tot = 0
    title ='Percentage spent by category \n'
    for cat in categories:
        withdrawals = [item for l in cat.withdrawals for item in l] # for flatten the list "withdrawals"
        # we calculate the expense

        cat_spent = sum(withdrawals)
        cost_tot += cat_spent
        cat_spent_percentage = round(cat_spent / cost_tot * 100)
        #   we put the amount in the list
        #   I would have liked to do it with a dictionary, to indicate category: 
        #   amount, but it gave some problems of iterability
        money_for_cat.append(cat_spent_percentage)
    for x in range (100, -10, -10):
        title += str(x).ljust(3)+"| "'\n'
           
    for amount in money_for_cat:
           if amount >= x:
                title += 'o  '
           else:
                title += '   '
    title += '\n' + ' ' * 4 + '-' * (len(money_for_cat) * 3)+ '-' + '\n'
    return title

     











#def create_spend_chart(categories):