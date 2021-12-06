class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        else:
            return False

    def get_balance(self):
        balance = 0
        for mov in self.ledger:
            balance += mov["amount"]
        return balance

    def transfer(self, amount, category):
        pass

    def check_funds(self, amount):
        if amount > self.get_balance():
            return False
        else:
            return True

def create_spend_chart(categories):
    pass