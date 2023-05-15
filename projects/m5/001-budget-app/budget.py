class Category:
    #when we create objects, we pass them the "name" of the budget category, which can be food, clothing etc.
    def __init__(self, name):
        self.name = name
        #The class should have an instance variable called ledger that is a list
        self.ledger = []

    #method that accepts an amount and description (if there is any) and append them in the ledger list
    def deposit(self, amount, description = ""):
        self.ledger.append({"amount": amount, "description": description})
    
    #similar to deposit method but the amount is negative
    def withdraw(self, amount, description = ""):
        #if method "check_funds" is True
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        else:
            return False

    #method that will return the balance of budget category by summing the amounts
    def get_balance(self):
        balance = 0
        for key in self.ledger:
            balance += key["amount"]
        return balance

    #method that accepts amount and other budget category, not "self" category
    def transfer(self, amount, other):
        #if method "check_funds" is True
        if self.check_funds(amount):
            self.withdraw(amount, "Transfer to {}" .format(other.name))
            other.deposit(amount, "Transfer from {}" .format(self.name))
            return True
        else:
            return False

    def check_funds(self, amount):
        if amount > self.get_balance():
            return False
        else:
            return True

    #__str__ method is a special method that represents an object as a string, so whenever an object is printed,
    #this method is automatically called to get the string representation of the object
    def __str__(self):
        title = "{}" .format(self.name)
        #title line of 30 characters where the name of the category is centered in a line of * characters
        title_line = title.center(30, "*")
        content = ""
        for item in self.ledger:
            #the list of items in the ledger will be printed so the description will be left aligned within 23 spaces
            #and the amount will be right alighned within 7 spaces and also it will contain two decimal places.
            content += "{:<23}{:>7.2f}\n" .format(item["description"][:23], item["amount"])
        
        #last line displaying the balance of the category
        content += "Total: {:.2f}" .format(self.get_balance())
        return title_line + "\n" + content

#function beside the Category class (takes a list as argument and returns a string)
def create_spend_chart(categories):    
    #title at the top
    chart = "Percentage spent by category\n"

    #finding the total withdrawals and finding the amount spent for each category and store them in a dict
    total = 0
    category_percentage = {}
    for category in categories:
        category_percentage[category.name] = 0
        for item in category.ledger:
            #if amount is negative means it's a withdrawal
            if item["amount"] < 0:
                total += abs(item["amount"])
                category_percentage[category.name] += abs(item["amount"])

    #converting the amounts from each category to percentage
    for item in category_percentage:
        category_percentage[item] = 100 * category_percentage[item] / total 
    
    percentage = 100
    for line in range(11):
        #prints percentage from 100 to 0 decreasing by 10 and prints "o" if category percentage is > the percentage
        chart += "{:>3}|" .format(percentage)
        for cat_name, cat_percent in category_percentage.items():
            if cat_percent > percentage:
                chart += " o "
            else:
                chart += "   "
        chart += " \n"
        percentage -= 10
    
    #print multiple "-"
    chart += "    " + ("-" * (3 * len(categories) + 1)) + "\n"
    #print name of the category vertically
    category_names = []
    counter = 0
    for category in categories:
        category_names.append(category.name)
    for line in range(len(max(category_names, key = len))):
        chart += "    "
        for cat_name in category_names:
            if len(cat_name) > counter:
                chart += " {} " .format(cat_name[counter])
            else:
                chart += "   "
        if counter < len(max(category_names, key = len)) - 1:
            chart += " \n"
        else:
            chart += " "
        counter += 1
    
    return chart