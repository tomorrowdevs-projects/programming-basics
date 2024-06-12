class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []
    
    def __str__(self):
        #return a string containing a summary of the budget category ready to be printed
        output_string = self.name.center(30, '*') + "\n"
        for movement in self.ledger:
            output_string += f"{movement['description'][:23]:<23s}{movement['amount']:>-7.2f}\n"
        output_string += "Total: " + str(self.get_balance())
        return output_string

    def deposit(self, amount, description=""):
        #add a deposit to ledger
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        #add a withdraw to ledger (if there is enough credit)
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        else:
            return False

    def get_balance(self):
        #return the total amount of money for the category
        balance = 0
        for movement in self.ledger:
            balance += movement["amount"]
        return balance

    def transfer(self, amount, category):
        #transfer money to another category
        if self.withdraw(amount, "Transfer to " + category.name):
            category.deposit(amount, "Transfer from " + self.name)
            return True
        else:
            return False

    def check_funds(self, amount):
        #verify if you have enough credit
        if amount > self.get_balance():
            return False
        else:
            return True

    def get_total_spent(self):
        #return the sum of all the expenses in the category
        total = 0
        for movement in self.ledger:
            if movement["amount"] < 0:           #consider only withdraws
                total += abs(movement["amount"])
        return total
        
        
def get_spending_percentages(categories):
    #return a dictionary with the spending percentage for each category (category name is the key)
    total_spending = 0
    spending_data = {}
    #calculate the data value for each category
    for category in categories:
        total_spending += category.get_total_spent()
    for category in categories:
        percentage = category.get_total_spent() / total_spending
        percentage *= 100
        spending_data[category.name] = percentage
    return spending_data


def create_spend_chart(categories):
    #return a string representing a chart summarizing expenses' percentage for each category
    
    categories_count = len(categories)
    output_string = ""
    spending_percentages = get_spending_percentages(categories)

    #find the length of the longest category name
    max_length = len(max(spending_percentages.keys(), key=len))
    
    #title
    output_string += "Percentage spent by category\n"

    #spending chart
    for position in range(100, 0-10, -10):
        output_string += f"{position:>3d}|"
        for category in spending_percentages:
            if spending_percentages[category] >= position:
                output_string += " o "
            else:
                output_string += "   "
        output_string += " \n"
    
    #separator line
    output_string += "    " + (3 * categories_count + 1) * "-" + "\n"
    
    #category names printed vertically
    for position in range(max_length):
        output_string += "    "
        for category in spending_percentages:
            if len(category) > position:
                output_string += f" {category[position]} "
            else:
                output_string += "   "
        if position < (max_length-1):
            output_string += " \n"
        else:
            output_string += " "                #to match the test (it requires no \n on the last line)

    return output_string