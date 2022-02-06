
class Category:

    def __init__(self, category):
        
        self.category = category
        self.ledger = []
        self.balance = 0
        
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
            self.ledger.append({'amount': -abs(amount), 'description': description})
            self.balance -= amount
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
    pass

