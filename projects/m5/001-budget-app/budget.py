from itertools import zip_longest

class Category:

    def __init__(self, category):
        self.category = category
        self.ledger = []

    def __repr__(self) -> str:
        title = f"{self.category.center(30, '*')}\n"
        transitions = ''
        for element in self.ledger:
            transitions += f"{element['description']:23.23} {element['amount']:>6.2f}\n"
        total = f"Total: {Category.get_balance(self):.2f}"
        
        return title + transitions + total
    
    def deposit(self, amount, description=''):
        self.amount = amount
        self.description = description
        deposit = {'amount': self.amount, 'description': self.description}
        self.ledger.append(deposit)


    def withdraw(self, amount, description=''):
        self.amount = amount
        self.description = description
        withdrawal = {'amount': -amount, 'description': self.description}
        if Category.check_funds(self, self.amount) == True:
            self.ledger.append(withdrawal)
            return True
        else:
            return False

    def get_balance(self):
        balance = 0
        for element in self.ledger:
            balance += element['amount']
        return round(balance, 2)
    
    def transfer(self, amount, budget_category):
        self.amount = amount
        self.budget_category = budget_category
        if Category.check_funds(self, self.amount) == True:
            withdrawal = {'amount': -amount, 'description': f'Transfer to {budget_category.category}'}
            deposit = {'amount': self.amount, 'description': f'Transfer from {self.category}'}
            self.ledger.append(withdrawal)
            budget_category.ledger.append(deposit)
            return True
        else:
            return False
                      
    def check_funds(self, amount):
        self.amount = amount
        if self.amount > Category.get_balance(self):
            return False
        else:
            return True



def create_spend_chart(categories):
    
    total_spend_all_cat = 0
    for category in categories:
        for element in category.ledger:
            if element['amount'] < 0:
                total_spend_all_cat += element['amount']
                
    percentages = []    # Find spend percentage for each category
    for category in categories:
        outputs = 0
        for element in category.ledger:
            if element['amount'] < 0:
                outputs += element['amount']
        percentage_spent = (100 * abs(outputs)) // abs(total_spend_all_cat)
        percentages.append(percentage_spent)

    labels =[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]
    spend_chart = 'Percentage spent by category\n'
    for label in labels:
        row = f'{label:>3}| '
        for percentage in percentages:
            if label <= percentage:
                row += 'o  '
            else:
                row += '   '
        spend_chart += f'{row}\n'

    list_categories = []
    for category in categories:
        name_category = category.category
        list_categories.append(name_category)
    categories_str = ' '.join(list_categories)

    line = '    '
    for x in range(len(list_categories)):
        line += '---'
    line += '-\n'

    row_category = ''
    letter_to_print = list(zip_longest(*categories_str.split(), fillvalue=' '))
    for x in letter_to_print :
        if (letter_to_print.index(x) + 1) == len(letter_to_print):
            row_category += f"{'  '.join(x):>12}  "
        else:
            row_category += f"{'  '.join(x):>12}  \n"

    return spend_chart + line + row_category
