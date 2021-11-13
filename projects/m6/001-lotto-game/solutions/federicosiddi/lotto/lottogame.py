from lotto.bill import Bill
from lotto.bill_printer import BillPrinter
from lotto.bet_types import BetTypes
from lotto.cities import Cities
from lotto.extraction import Extraction
from lotto.helper import InputHelper


class LottoGame:

    def __init__(self, n_of_bills):
        self.num_of_bills = n_of_bills

        # list where all Bill objects will be stored
        self.bills = []
        print("Welcome to the italian lotto ticket generator!")
        print(f"Tickets you want to generate: ({self.num_of_bills})")

        for bill in range(self.num_of_bills):
            print(f"{(' TICKET N '+ str(bill+1) + ' ').center(50, '=')}")

            # city choice input and validation part // Bari
            InputHelper.city_choice_helper()
            city_choice = Cities.is_city_valid()

            # bet choice input and validation part // Terno
            InputHelper.bet_choice_helper()
            bet_choice = BetTypes.is_type_valid()

            # bet choice input and validation part // if bet type is Terno, num amount will be >= 3 and <= 10
            InputHelper.numbers_choice_helper(bet_choice)
            num_amount = BetTypes.is_bet_valid(bet_choice)

            # iteration part for extracting
            extracted_nums = Extraction.extract_numbers(num_amount)

            self.bills.append(Bill(city=city_choice, b_type=BetTypes.TYPES[bet_choice - 1], nums=extracted_nums, bill_num=bill))

        BillPrinter(self.bills)


# test
if __name__ == "__main__":
    LottoGame(2)
