import random
import tabulate

class Lotto_Ticket:

    def __init__(self):
        self.tickets_elements = []
        self.numbers = []
        self.sorti = []
        self.ruote = []

        num_played = int(input('How many numbers would you generate?(max: 10)\n'))
        if num_played > 10:
            raise Exception('ERROR: Yuo can play up to five bills!')
    
        for x in range(num_played):
            number = str(random.randint(0, 90))
            self.numbers.append(number)

        num_bills = int(input('How many bills would you generate?\n'))
        if num_bills > 5:
            raise Exception('ERROR: Yuo can play up to ten numbers!')
        
        for x in range(num_bills):
            type_of_bill = input('Enter type of bill\n')
            self.sorti.append(type_of_bill)

        num_ruote = int(input('How many wheels do you want to bet on?\n'))
        for x in range(num_ruote):
            ruota = input('Enter the Lotto wheel\n')
            self.ruote.append(ruota)
        
        self.tickets_elements.append(self.numbers)
        self.tickets_elements.append(self.ruote)
        self.tickets_elements.append(self.sorti)


    def __str__(self):
        headers = ['NUMBERI', 'RUOTE', 'SORTI']
        rows_table = []

        i = 0
        height = max(len(self.numbers), len(self.sorti), len(self.ruote))
        for x in range(height):
            row = []
            for element in self.tickets_elements:
                try:
                    row.append(element[i])
                except IndexError:
                    row.append(' ')
            rows_table.append(row)
            i += 1

        table = str(tabulate.tabulate(rows_table, headers, tablefmt="pretty"))

        return table

tickets = Lotto_Ticket()
print(tickets)