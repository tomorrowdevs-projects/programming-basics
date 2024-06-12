class PrintBIll:
    """ The class that print a bill in ascii art table decoration"""
    def __init__(self, bills):
        self.bills = bills
        self.printer_ticker(self.bills)

    @staticmethod
    def printer_ticker(bill):
        print_bill = ''
        separator_line = '+' + 20 * '-' + '+\n'
        empty_line = '|' + 20 * ' ' + '|\n'
        result = separator_line + '|' + 'Italian Lottery'.center(20) + '|\n' + separator_line
        lst_number = ''
        for number in range(len(bill[2])):
            if number == 5:
                result += '|' + lst_number.center(20) + '|\n'
                lst_number = ''
            lst_number += str(bill[2][number]) + ' '
        result += '|' + lst_number.center(20) + '|\n' + separator_line + '|' + 'City'.center(
            20) + '|\n' + empty_line + '|' + \
                  str(bill[1]).center(20) + '|\n' + separator_line + '|' + 'Type of bill'.center(
            20) + '|\n' + empty_line + '|' + \
                  bill[0].center(20) + '|\n' + separator_line

        print_bill += result + '\n'
        print(print_bill)

