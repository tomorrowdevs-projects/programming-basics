from .cities import Cities
from .bet_type import BetType
from .bill import Bill
from .numbers_generator import NumberGenerator


class Lotto:

    def __init__(self, n: int) -> None:
        self.bills_number = n
        self.bills_lst = []

        for i in range(self.bills_number):
            print(f"{'*' * 10} Bill number {i + 1} {'*' * 10}")
            bill_bet_type = Lotto.ask_bet_types()
            bill_bet_numbers = Lotto.ask_bet_numbers(bill_bet_type)
            numbers = NumberGenerator.num_gen(bill_bet_numbers)
            bill_city = Lotto.ask_city()
            bill = Bill(i, bill_bet_type, bill_city, numbers)
            self.bills_lst.append(bill)
            print(bill)
        print(self.bills_lst)

    @staticmethod
    def ask_city() -> str:
        print("\nChoose a city(aka 'Routa') from the list below: ")
        Cities.print_cities()
        while True:
            city = input("--> ")
            if Cities.validate_city(city):
                break
            else:
                print("Invalid digit, please enter a city from the list.")
        return city

    @staticmethod
    def compare_bet_with_num(bet_numbers, bet_types, bet) -> bool:
        if int(bet_numbers) < bet_types[bet]:
            return False
        return True

    @staticmethod
    def ask_bet_types() -> str:
        print("\nChoose a bet from the list below: ")
        BetType.print_bet_types()
        while True:
            bet = input("--> ")
            if BetType.validate_bet(bet):
                break
            else:
                print("Invalid digit, please enter a bet from the list.")
        return bet

    @staticmethod
    def ask_bet_numbers(bet: str) -> int:
        print("\nHow many numbers do you want for your bill"
              "(min  1 - max 10)?")
        while True:
            bet_numbers = input("--> ")
            bet_cap = bet.capitalize()
            if bet_numbers.isdigit() and 0 < int(bet_numbers) <= 10:
                if Lotto.compare_bet_with_num(
                        bet_numbers,
                        BetType.bet_types,
                        bet_cap):
                    break
                else:
                    print(f"Number must be at least"
                          f"{BetType.bet_types[bet_cap]}"
                          f" or greater for {bet_cap}")
                    continue
            else:
                print("Invalid digit, please enter a number between 1 and 10")
        return int(bet_numbers)
