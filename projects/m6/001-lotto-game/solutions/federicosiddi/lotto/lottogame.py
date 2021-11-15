from .bill import Bill
from .bill_printer import BillPrinter
from .bet_types import BetTypes
from .cities import Cities
from .extraction import Extraction


class LottoGame:

    def __init__(self, n_of_bills):
        self.num_of_bills = n_of_bills

        # list where all Bill objects will be stored
        self.bills = []
        print("Welcome to the italian lotto ticket generator!")
        print(f"Tickets you want to generate: ({self.num_of_bills})")

        for bill in range(self.num_of_bills):
            print(f"{(' TICKET N '+ str(bill+1) + ' ').center(50, '=')}")

            # city choice input and validation part
            Cities.city_choice_info()
            city_choice = Cities.is_city_valid()

            # bet choice input and validation part
            BetTypes.bet_choice_info()
            bet_choice = BetTypes.is_type_valid()

            # bet choice input and validation part // if bet type is for ex. Terno, num amount will be >= 3 and <= 10
            BetTypes.numbers_choice_info(bet_choice)
            num_amount = BetTypes.is_bet_valid(bet_choice)

            # here a list of random numbers will be generated
            extracted_nums = Extraction.extract_numbers(num_amount)

            self.bills.append(Bill(city=city_choice, b_type=BetTypes.TYPES[bet_choice - 1], nums=extracted_nums, bill_num=bill))
        # At this point all the generated tickets aka bills will be printed
        BillPrinter(self.bills)


# test
if __name__ == "__main__":
    LottoGame(2)

