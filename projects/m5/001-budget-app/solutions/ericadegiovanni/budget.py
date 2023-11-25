import math

class Category:
    
    # withdrawal data
    withdrawals_counter = {}
    total_withdrawals = 0

    def __init__(self, category):
        
        self.category = category
        self.ledger = []
        self.balance = 0

        Category.withdrawals_counter[self.category]  = 0 #execute every time you create an instance
        
    def check_funds(self, amount):
        if amount > self.balance:
            return False
        else: 
            return True

    def deposit(self, amount, description = ''):
        self.ledger.append({'amount': amount, 'description': description})
        self.balance += amount

    def withdraw(self, amount, description = ''):
        if self.check_funds(amount):
            # update ledger
            self.ledger.append({'amount': -abs(amount), 'description': description})
            self.balance -= amount
            
            # update withdrawal data
            Category.withdrawals_counter[self.category] += abs(amount)
            Category.total_withdrawals += abs(amount)
                       
            return True
        else:
            return False

    def get_balance(self):
        return self.balance

    def transfer(self, amount, budget_category):
        if self.check_funds(amount):
            self.withdraw(amount, f'Transfer to {budget_category.category}')
            budget_category.deposit(amount,f'Transfer from {self.category}')
            return True
        else:
            return False

    def display_budget_object(self):
        title = f"{self.category.center(30,'*')}\n"
        movements = ''

        for mov in self.ledger:
            description = mov['description'] if len(mov['description']) < 23 else mov['description'][:23]
            amount = f"{mov['amount']:.2f}" if len(str(mov['amount'])) < 8 else mov['amont'][:7]
            l = 30 - len(description)
            movements += f"{description}{amount.rjust(l)}\n"

        return f'{title}{movements}Total: {self.balance:.2f}'

    def __str__(self):
        return self.display_budget_object()
        

def create_spend_chart(categories):

    percentages_spent = {}
    spend_chart = 'Percentage spent by category\n'
    
    # find percentages spent for each category
    for category in Category.withdrawals_counter:
        percentages_spent[category] = math.floor(((Category.withdrawals_counter[category] / Category.total_withdrawals  ) * 100) / 10)
    
    #create bars
    for i in range(10, -1, -1):
        spend_chart += f'{str(i * 10).rjust(3)}|'

        for c in categories:
            if percentages_spent[c.category] == i: 
                spend_chart += ' o ' 
                percentages_spent[c.category] -= 1
            else: spend_chart += '   '  

        spend_chart += '\n'   

    spend_chart += f"    {'---' * len(categories)}-\n"
    
    # add category names
    max_l = max([len(c.category) for c in categories])
    cat_str = [c.category.ljust(max_l) for c in categories]   
    category_names = '    '
    
    for i in range(max_l): 
        for i2 in range(len(cat_str)):           
            category_names += f' {cat_str[i2][i]} '
        category_names += '\n    '

    spend_chart += category_names

    return spend_chart
    

