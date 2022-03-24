class Category:
    """A class representing different budget categories"""
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def __str__(self):
        """Return a string of every budget category displayed in a user-friendly way"""
        display_out = self.name.center(30, '*') + "\n"
        for ledger_obj in self.ledger:
            category_record = f"{ledger_obj['description'][:23]:<23}"\
                              f"{ledger_obj['amount']:>7.2f}\n"
            display_out += category_record
        category_total = self.get_balance()
        display_out += f"Total: {category_total}"
        return display_out

    def deposit(self, amount, description=""):
        """Add category deposit as dictionary on the ledger list"""
        self.ledger.append({'amount': amount, 'description': description})

    def withdraw(self, amount, description=""):
        """Return true if the withdrawal can be performed, false otherwise"""

        if self.check_funds(amount):
            self.ledger.append({
                'amount': -amount,
                'description': description
            })
            return True
        else:
            return False

    def get_balance(self):
        """Return the total balance amount of a budget category"""
        balance = 0
        for record in self.ledger:
            balance += record['amount']
        return balance

    def transfer(self, amount, category):
        """Take an amount and a category and return true if the amount can be
        transferred on the category"""
        if self.withdraw(amount, f"Transfer to {category.name}"):
            category.deposit(amount, f"Transfer from {self.name}")
            return True
        return False

    def check_funds(self, amount):
        return False if amount > self.get_balance() else True


def create_spend_chart(categories):
    """Create a string chart representing the percentage of the
    expenses for every category"""

    def build_perc_dct(cat_lst):
        """Take a list of category and return a dictionary mapping every
        category with its expense in percentage on total expenses"""
        total_spent = 0
        percentage_dct = {}
        for cat in cat_lst:
            cat.spent = 0
            for record in cat.ledger:
                if record['amount'] < 0 and record['description'][:11] \
                        != 'Transfer to':
                    cat.spent += abs(record['amount'])
            total_spent += cat.spent
        for cat in cat_lst:
            cat.spent_percentage = round(cat.spent / total_spent * 100)
            percentage_dct[cat.name] = percentage_dct.get \
                (cat.name, cat.spent_percentage)
        return percentage_dct
    percentage_dct = build_perc_dct(categories)

    chart_output = "Percentage spent by category"
    for i in range(100, -10, -10):
        chart_output += f"\n{i:>3}| "
        for category in categories:
            if percentage_dct[category.name] >= i:
                chart_output += 'o  '
            else:
                chart_output += '   '
    chart_output += '\n' + ' ' * 4 + '-' * (len(percentage_dct) * 3)\
                    + '-' + '\n'

    longest_string = 0
    for string_cat in percentage_dct.keys():
        if len(string_cat) > longest_string:
            longest_string = len(string_cat)

    for i in range(longest_string):
        chart_output += "     "
        for category in categories:
            if i < len(category.name):
                chart_output += category.name[i] + '  '
            else:
                chart_output += "   "
        if i < longest_string - 1:
            chart_output += '\n'
        else:
            chart_output += ""

    return chart_output
