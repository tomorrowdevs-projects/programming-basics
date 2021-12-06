class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []
    
    def __str__(self):
        s = self.name.center(30, '*') + "\n"
        for mov in self.ledger:
            s += f"{mov['description'][:23]:<23s}{mov['amount']:>-7.2f}\n"
        s += "Total: " + str(self.get_balance())
        return s

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
        if self.withdraw(amount, "Transfer to " + category.name):
            category.deposit(amount, "Transfer from " + self.name)
            return True
        else:
            return False

    def check_funds(self, amount):
        if amount > self.get_balance():
            return False
        else:
            return True

    def get_total_spent(self):
        total = 0
        for mov in self.ledger:
            if mov["amount"] < 0:           #consider only withdraws
                total += abs(mov["amount"])
        return total
        
        

def create_spend_chart(categories):
    total = 0
    n_cat = len(categories)
    spend_data = {}
    s = ""
    for c in categories:
        total += c.get_total_spent()
    for c in categories:
        percentage = c.get_total_spent() / total
        percentage *= 100
        spend_data[c.name] = percentage
    s += "Percentage spent by category\n"
    for i in range(100, 0-10, -10):
        s += f"{i:>3d}|"
        for key in spend_data:
            if spend_data[key] >= i:
                s += " o "
            else:
                s += "   "
        s += " \n"
    s += "    " + (3*n_cat + 1)*"-" + "\n"
    l_max = 0
    for key in spend_data:
        if len(key) > l_max:
            l_max = len(key)
    for i in range(l_max):
        s += "    "
        for key in spend_data:
            if len(key) > i:
                s += f" {key[i]} "
            else:
                s += "   "
        if i < (l_max-1):
            s += " \n"
        else:
            s += " "                #to match the test
    return s