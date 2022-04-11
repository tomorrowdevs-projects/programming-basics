from .bill import Bill # type: ignore
from typing import List


class PrintBill:

    """
    A class used for printing a nicer and readable
    representation of the lotto bill.

    +==============================+==========+==========+
    |          BILL N°1            |   BET    |   CITY   |
    +==============================+==========+==========+
    |  62-34-77-89-1-54-22-44-50-3 |  Terno   |  Torino  |
    +------------------------------+----------+----------+

    """

    @staticmethod
    def print_bill(bill_to_print: Bill) -> None:

        def header_margin() -> None:
            print('+' + ('=' * 30), end="")
            print('+' + ('=' * 10), end="")
            print('+' + ('=' * 10), end="")
            print('+')

        def row():
            print('+' + ('-' * 30), end="")
            print('+' + ('-' * 10), end="")
            print('+' + ('-' * 10), end="")
            print('+')

        def header(bill: Bill) -> None:
            header_margin()
            print('|{:^30}'.format('BILL N° '
                                   + str(bill.bill_number + 1)), end="")
            print('|{:^10}'.format('BET'), end="")
            print('|{:^10}|'.format('CITY'))
            header_margin()

        def bill_line(bill: Bill) -> None:
            n: List[str] = [str(x) for x in bill.numbers]
            n_str: str = '-'.join(n)
            print('|{:^30}'.format(n_str), end="")
            print('|{:^10}'.format(bill.bet_type), end="")
            print('|{:^10}|'.format(bill.city))
            row()

        header(bill_to_print)
        bill_line(bill_to_print)
