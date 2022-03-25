from lotto.lotto import Lotto
from lotto.printer import Printer

def main():

    # Part 1
    tot_bills = Lotto.arg_parser()
    Lotto.tk_creation(tot_bills)
    Printer.print_all_tickets()

    # Part 2 lotto extraction
    Lotto.make_extraction()
    Printer.print_extraction(Lotto.extraction)  
    Lotto.define_tk_victory(Lotto.extraction)  
    Printer.print_winning_tickets()
    
    
if __name__ == '__main__':

    main()

