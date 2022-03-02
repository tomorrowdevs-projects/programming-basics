class Category:
    
    def __init__(self, subject: str):

        #Validations
        assert len(subject) >= 3, f"The Category must be at leas of 3 letter"

        #Assign to self object
        self.__subject = subject
        self.__ledger = []
        self.__withdraws = 0

    #Getter for ledger
    @property
    def ledger(self):
        return self.__ledger

    #Getter for withdraws
    @property
    def minus(self):
        return self.__withdraws

    #Getter and Setter for Subject
    @property
    def subject(self):
        return self.__subject

    @subject.setter
    def subject(self, new_subject: str):
        if len(new_subject) >= 3:
            self.__subject = new_subject
        else:
            raise Exception('The name of the Category is too short')

    #Get Balance for ledger 
    def get_balance(self):
        return sum(item['amount'] for item in self.__ledger)

    #Deposit function
    def deposit(self, value: float, description=''):
        if value < 0:
            raise Exception('The Value of Deposit can\'t be negative')
        else:
            self.__ledger.append({'amount': value,'description': description})

    #Check found function
    def check_funds(self, value: float):
        return self.get_balance() >= value

    #Withdraw function
    def withdraw(self, value: float, description=''):
        if self.check_funds(value):
            self.__ledger.append({'amount': value*-1,'description': description})
            self.__withdraws += value
            return True
        else:
            return False

    #Transfer function
    def transfer(self, value: float, other_category):
        if not isinstance(other_category, Category):
            raise Exception('Second Value Must be a Category')
        elif self.check_funds(value):
            self.withdraw(value, f"Transfer to {other_category.subject}")
            other_category.deposit(value, f"Transfer from {self.__subject}")
            return True
        else:
            return False

    def __repr__(self):
        # filler = int((30-len(self.__subject))/2)
        # table = f"{'*'*filler}{self.__subject}{'*'*filler}\n"
        #center function have 2 argument, the total space of the lane to take for center the string and second argument is the letter around it
        table = self.__subject.center(30, '*') + '\n'
        for transition in self.__ledger:
            table += transition['description'][:23].ljust(23) + f"{transition['amount']:5.2f}".rjust(7) + "\n"
        table += "Total: " + f"{sum(item['amount'] for item in self.__ledger)}"
        return table

def create_spend_chart(categories: list):
    Final_output = 'Percentage spent by category\n'
    total_minus = 0
    data = []
    #create the data as directory with budget for category and spent
    for category in categories:
        single_info = {
        'name': category.subject,
        'negative': category.minus,
        }
        total_minus += category.minus
        data.append(single_info)
    #calculate the percentuage
    for info in data:
        info['percentage'] = round((info['negative'] / total_minus * 100))
    #first part of the table, declare the each row and after add the dots
    
    for i in range(100,-10,-10):
        row = f"{i}|".rjust(3)
        for x in data:
            # row += "{:<2}{:>1}".format(' ','o' if x['percentage'] >= i else ' ') <--- old solution
            row += ('o' if x['percentage'] >= i else ' ').center(3)
        row += ' \n '
        Final_output += row
    #line for separate the table with table-heads
    Final_output += "{:>3}".format(' ') + ('---'*len(data)) + '-'
    # Final_output += ''.('---'*len(data)).rjust(3) + '\n' <--- old solution


    # second part of the table with the heads
    # longest for compare the lenght of categories's name
    longest = max(len(x['name']) for x in data)
    for chara in range(0,longest):
        line = '\n' + ''.ljust(4)
        for category_name in data:
            try:
                line += category_name['name'][chara].center(3)
            except IndexError:
                line += ' '.center(3) 
        Final_output += line + ' '
    return Final_output

def main():
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

if __name__ == '__main__':
    main()