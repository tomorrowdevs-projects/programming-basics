class Category:
    """Instantiate object based on different budget categories"""
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def __str__(self):
        display_out = self.name.center(30, '*') + "\n"
        for ledger_obj in self.ledger:
            category_record = f"{ledger_obj['description'][:23]:<23}"\
                              f"{ledger_obj['amount']:>7.2f} \n"
            display_out += category_record
        category_total = self.get_balance()
        display_out += f"Total {category_total} \n"
        return display_out

    def deposit(self, amount, description=""):
        self.ledger.append({'amount': amount, 'description': description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({
                'amount': -amount,
                'description': description
            })
            return True
        else:
            return False

    def get_balance(self):
        balance = 0
        for item in self.ledger:
            balance += item['amount']
        return balance

    def transfer(self, amount, category):
        if self.withdraw(amount, f"Transfer to {category.name}"):
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def check_funds(self, amount):
        return False if amount > self.get_balance() else True



def create_spend_chart(categories):
    print("Percentage spent by category")


    pass

food = Category("Food")
food.deposit(1000, "initial deposit")
food.withdraw(10.15, "groceries")
food.withdraw(15.89, "restaurant and more food for dessert")
print(food.get_balance())
clothing = Category("Clothing")
food.transfer(50, clothing)
clothing.withdraw(25.55)
clothing.withdraw(100)
auto = Category("Auto")
auto.deposit(1000, "initial deposit")
auto.withdraw(15)

print(food)
print(clothing)
