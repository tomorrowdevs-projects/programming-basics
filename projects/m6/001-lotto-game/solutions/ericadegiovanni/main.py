from lotto.lotto import Lotto
from lotto.printer import Printer

def main():

    # Starting point
    tot_bills = Lotto.arg_parser()
    Lotto.tk_creation(tot_bills)

    Printer.print_all_tickets()

    



    
if __name__ == '__main__':
    main()

