class Category:

    def __init__(self, name):
            self.ledger = []
            self.name = name

    def deposit(self, amount, description= ''):
            self.description = description
            self.ledger.append({'amount': amount, 'description': description})
            

    def withdraw(self, amount, description= ''):
            self.amount = amount
            if self.check_funds(amount):
                self.ledger.append({'amount': -abs(amount), 'description': description})
                return True 
            return False

    def get_balance(self):
        balance = 0
        for price in self.ledger:
            balance += float(price['amount'])
        return  balance  

    def check_funds(self, amount):
        if amount > self.get_balance:
            return False
        return True  

    def transfer(self, amount,category):
        if self.check_funds(amount):
           self.withdraw(amount, f"Transfer to {category}")
           self.deposit(amount, f"Transfer to {category}")  # da testare
           return True
        return False   
        
                
         
      
    








#def create_spend_chart(categories):