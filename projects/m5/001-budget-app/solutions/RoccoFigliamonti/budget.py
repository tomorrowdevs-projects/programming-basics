class Category:

    def __init__(self,name):
        self.name = name
        self.ledger = []

    def __str__(self):
        statement = str(self.name).center(30, "*") + "\n"
        for el in self.ledger:
            statement += el["description"][:23].ljust(23)
            statement += ("{0:.2f}".format(el['amount'])).rjust(7) + "\n"
        statement += "Total: " + str(self.get_balance()) + "\n"
        return statement

    
    def deposit(self, amount, description=""):
        deposit_dict = {"amount":amount, "description": description}
        self.ledger.append(deposit_dict)

    def get_balance(self):
        amount_list = []
        for el in self.ledger:
            amount_list.append(el["amount"])
        return sum(amount_list)

    def check_funds(self,amount):
        if amount > self.get_balance():
            return False
        else:
            return True
    
    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            withdraw_dict = {"amount":-amount, "description": description}
            self.ledger.append(withdraw_dict)
            return True
        else:
            return False
        
    def transfer(self, amount, category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {category.name}")
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        else:
            return False



def create_spend_chart(categories):
    #creating a dictionary key = category, value = total amount of withdraw for that category
    expenses_dict = {}
    for category in categories:
        category_exp = 0
        for el in category.ledger:
            if el["amount"] < 0 and ("Transfer") not in el['description']: #if it's a withdraw
                category_exp += abs(el["amount"])
            expenses_dict[category.name] = category_exp 
    #new dict with relative values in %
    tot_expenses = sum(expenses_dict.values())
    expen_perc = {k: round(v/tot_expenses*100) for k, v in expenses_dict.items()}

    #creating chart %
    chart = "Percentage spent by category\n"
    for i in range(100,-10, -10):
        chart += str(i).ljust(3) + "|"
        for el in categories:
            if expen_perc[el.name]>= i:
                chart += "o "
            else:
                chart += ""
        chart += "\n"

    #chat label ???
    return chart


