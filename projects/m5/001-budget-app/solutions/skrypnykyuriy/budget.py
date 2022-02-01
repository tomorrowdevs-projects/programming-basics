class Category(object):
    def __init__(self, category):
        self.ledger = []
        self.category = category
        self.total = 0

    def deposit(self, amount, description=''):
        self.ledger.append({"amount": amount, "description": description})
        self.total += amount

    def withdraw(self, amount, description=''):
        if self.check_funds(amount):
            return False
        else:
            self.ledger[0]['amount'] -= amount
            self.ledger.append({"amount": '-' + str(amount), "description": description})
            return True

    def get_balance(self):
        print(f'{self.category.center(30, "*")}')
        print('{:<23}{:>7}'.format('initial deposit', str(self.total)+'.00'))
        for item in self.ledger[1:]:
            print('{:<23}{:>7}'.format(item['description'][:22], item['amount']))
        print('{:<23}{:>7}'.format('Total: ', self.ledger[0]['amount']))

    def transfer(self, amount, category):
        if self.check_funds(amount):
            return False
        else:
            category.ledger.append({"amount": amount})
            self.ledger.append({"amount": amount, "description": f"Transfer to {category}"})
            category.ledger.append({"amount": '-' + str(amount), "description": f"Transfer from {self.category}"})
            return True

    def check_funds(self, amount):
        if self.ledger is True:
            if amount > self.ledger[0]['amount']:
                return False
            else:
                return True


def create_spend_chart(categories):
    print("Percentage spent by category")
