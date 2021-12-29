class PrintBill:
    """
    +==============================+==========+==========+
    |          BILL N°1            |   BET    |   CITY   |
    +==============================+==========+==========+
    |  62-34-77-89-1-54-22-44-50-3 |  Terno   |  Torino  |
    +------------------------------+----------+----------+

    """

    @staticmethod
    def print_bill(bill_to_print):

        def header_margin():
            print('+' + ('=' * 30), end="")
            print('+' + ('=' * 10), end="")
            print('+' + ('=' * 10), end="")
            print('+')

        def row():
            print('+' + ('-' * 30), end="")
            print('+' + ('-' * 10), end="")
            print('+' + ('-' * 10), end="")
            print('+')

        def header(bill):
            header_margin()
            print('|{:^30}'.format('BILL N° '
                                   + str(bill.bill_number + 1)), end="")
            print('|{:^10}'.format('BET'), end="")
            print('|{:^10}|'.format('CITY'))
            header_margin()

        def bill_line(bill):
            n = [str(x) for x in bill.numbers]
            n_str = '-'.join(n)
            print('|{:^30}'.format(n_str), end="")
            print('|{:^10}'.format(bill.bill_type), end="")
            print('|{:^10}|'.format(bill.city))
            row()

        header(bill_to_print)
        bill_line(bill_to_print)

#
