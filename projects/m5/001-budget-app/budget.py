class Category:
    def __init__(self, category_name):
        self.category_name = category_name
        self.ledger = []
    
    def deposit(self, amount, description=""):
        if isinstance(amount, (int, float)):
            self.ledger.append({"amount": amount, "description": description})
        else:
            raise TypeError("The amount parameter can be an int or a float.")

    def withdraw(self, amount, description=""):
        if isinstance(amount, (int, float)):
            if self.check_funds(amount):
                self.ledger.append({"amount": -amount, "description": description})
                return True
            return False
        raise TypeError("The amount parameter can be an int or a float.")

    def get_balance(self):
        current_balance = 0
        for move in self.ledger:
            current_balance += float(move["amount"])
        return current_balance
    
    def transfer(self, amount, another_category):
        if isinstance(amount, (int, float)):
            if self.check_funds(amount):
                self.withdraw(amount, "Transfer to {}".format(another_category.category_name))
                another_category.deposit(amount, "Transfer from {}".format(self.category_name))
                return True
            return False
        raise TypeError("The amount parameter can be an int or a float.")

    def check_funds(self, amount):
        if isinstance(amount, (int, float)):
            current_balance = self.get_balance()
            if amount > current_balance:
                return False
            return True
        raise TypeError("The amount parameter can be an int or a float.")

    def __str__(self):
        printed_object = "{:*^30}\n".format(self.category_name)
        for item in self.ledger:
            printed_object += "{:23.23}{:7.2f}\n".format(item["description"], item["amount"])
        printed_object += "Total: {:.2f}".format(self.get_balance())
        return printed_object


def create_spend_chart(categories: list) -> str:
    """Takes a list of categories, returns a string which is a bar chart."""
    chart = ""
    total_expenses = 0
    expenses_by_category = dict()
    percentages_by_category = dict()
 
    for single_category in categories:
        expenses_by_category[single_category.category_name] = 0
        for movement in single_category.ledger:
            if movement["amount"] < 0:
                total_expenses -= movement["amount"]
                expenses_by_category[single_category.category_name] -= movement["amount"]

    for element in expenses_by_category:
        percentage = expenses_by_category[element] / total_expenses * 100
        percentages_by_category[element] = percentage

    title = "Percentage spent by category\n"
    left_side = {100: "", 90: "", 80: "", 70: "", 60: "", 50: "", 40: "", 30: "", 20: "", 10: "", 0: ""}
    for single_category in categories:
        for number in left_side:
            if percentages_by_category[single_category.category_name] > number:
                left_side[number] += " o "
            else:
                left_side[number] += "   "
    
    dashes_number = 3 * len(categories) + 1
    dashed_line = "    " + ("-" * dashes_number) + "\n"

    category_name_rows = dict()
    index_category = 1
    for single_category in categories:
        row = 1
        for letter in single_category.category_name:
            if row not in category_name_rows:
                category_name_rows[row] =  (3 * index_category * " ") + " {} ".format(letter)
            else:
                category_name_rows[row] += " {} ".format(letter)
            row += 1
        if len(single_category.category_name) < max(category_name_rows.keys()):
            while row <= max(category_name_rows.keys()):
                category_name_rows[row] += "   "
                row += 1
        index_category += 1
    
    chart += title
    for value in reversed(sorted(left_side.keys())):
        chart += "{:3}|{} \n".format(value, left_side[value])
    chart += dashed_line

    for row_number in sorted(category_name_rows.keys()):
        chart += " {} ".format(category_name_rows[row_number])
        if row_number < max(category_name_rows.keys()):
            chart += "\n"
            
    return chart
