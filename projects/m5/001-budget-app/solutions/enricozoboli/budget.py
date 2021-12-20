class Category:
    """Instantiate object based on different budget categories"""
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        # item = dict()
        # item[amount] = description
        self.ledger.append({amount: description})

    def withdraw(self):
        pass

    def get_balance(self):
        pass

    def transfer(self):
        pass

    def check_funds(self):
        pass


def create_spend_chart(categories):
    pass