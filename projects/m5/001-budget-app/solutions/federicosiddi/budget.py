class Category:
    def __init__(self, name):
        self.ledger = []
        self.name = name
        self.expenses = 0
    
    def __str__(self):
        output = self.name.center(30, '*') + "\n"
        for entry in self.ledger:
            if len(entry['description']) > 23:
                output += entry['description'][:23]
            else:
                output += entry['description'].ljust(23) 
            output += ("{0:.2f}".format(entry['amount'])).rjust(7) + "\n"
        balance = self.get_balance()
        output += f"Total: {balance}"
        return output

    def deposit(self, amount, description = ""):
        item = {"amount": amount, "description":description}
        self.ledger.append(item)
    
    def withdraw(self, amount, description = ""):
        if self.check_funds(amount):
            item = {"amount": -amount, "description": description}
            self.ledger.append(item)
            return True
        return False
    
    def get_balance(self):
        balance = 0
        for entry in self.ledger:
            balance += float(entry["amount"])
        return balance
    
    def transfer(self, amount, category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {category.name}")
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False
    
    def check_funds(self, amount):
        if amount > self.get_balance():
            return False
        return True



def create_spend_chart(categories):
    output = "Percentage spent by category\n"
    money_spent_per_cat = {}
    
    for cat in categories:
        for entry in cat.ledger:
            if entry['amount']  < 0 and ("Transfer") not in entry['description']:
                cat.expenses += abs(entry['amount'])
        money_spent_per_cat[cat.name] = cat.expenses
    tot_expenses = sum(money_spent_per_cat.values())
    exp_percentages = {cat: round(exp/tot_expenses*100) for cat, exp in money_spent_per_cat.items()}

    for x in range (100, -10, -10):
        output += str(x).ljust(3)+"| "
        for entry in categories:
            if exp_percentages[entry.name]+5 >= x:
                output += "o  "
            else:
                output += "   "
        output += "\n"
    output += (" ")*4 + ("---")*len(categories)+ "-" + "\n"
    
    for x in range(max(map(len, exp_percentages))):
        output += "    "
        for name in exp_percentages.keys():
            if len(name) > x:
                output += f" {name[x]} "
            else:
                output += "   "
        output += "\n"
    return output

# TEST
if __name__ == "__main__":
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

    print(create_spend_chart([food, clothing, auto]))
    