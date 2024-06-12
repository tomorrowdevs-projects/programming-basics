class Category(object):
    def __init__(self, category):
        self.ledger = []
        self.name = category

    def __str__(self):
        result = f'{self.name.center(30, "*")}\n'
        for item in self.ledger:
            result += '{:<23}{:>7}\n'.format(item['description'][:23], "{:.2f}".format(item['amount']))
        result += f"Total: {self.get_balance()}"
        return result

    def deposit(self, amount, description=''):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=''):
        if self.check_funds(amount):
            self.ledger.append({"amount": float(-amount), "description": description})
            return True
        else:
            return False

    def get_balance(self):
        total = 0
        for num in self.ledger:
            total += float(num['amount'])
        return total

    def transfer(self, amount, category):
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": f"Transfer to {category.name}"})
            category.ledger.append({"amount": amount, "description": f"Transfer from {self.name}"})
            return True
        else:
            return False

    def check_funds(self, amount):
        if amount > self.ledger[0]['amount']:
            return False
        else:
            return True


def create_spend_chart(categories):
    total = 0
    spend_for_category = {}
    for category in categories:
        for item in category.ledger[1:]:
            if 'Transfer' not in item['description']:
                total += item['amount']
            if 'Transfer' not in item['description']:
                if category.name not in spend_for_category:
                    spend_for_category[category.name] = abs(item['amount'])
                else:
                    spend_for_category[category.name] += abs(item['amount'])

    lst_of_percent = []
    for key, values in spend_for_category.items():
        rounded = round(values / total * -100) / 10
        lst_of_percent.append(int(rounded))

    output = "Percentage spent by category\n"
    label_y = ['  0| ', ' 10| ', ' 20| ', ' 30| ', ' 40| ', ' 50| ', ' 60| ', ' 70| ', ' 80| ', ' 90| ', '100| ']

    for label in label_y:
        str_add = ''
        for percent in lst_of_percent:
            if label_y.index(label) <= percent:
                str_add += 'o  '
            else:
                str_add += '   '
        label_y[label_y.index(label)] += str_add
    output += '\n'.join(label_y[::-1])
    output += "\n" + " " * 4 + "-" * 10 + '\n'

    list_length = []
    for key, values in spend_for_category.items():
        list_length.append(len(key))
    max_length = max(list_length)

    for i in range(max_length):
        output += ' ' * 5
        for category in categories:
            if len(category.name) > i:
                output += category.name[i] + '  '
            else:
                output += '   '
        output += '\n'
    output = output[:-1]

    return output
