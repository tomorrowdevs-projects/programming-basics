from lotto.bill import Bill
from lotto.bill_printer import BillPrinter
from lotto.bill_types import BillTypes
from lotto.cities import Cities
from lotto.extraction import Extraction
from lotto.lottogame import LottoGame

extraction = Extraction()
game = LottoGame()
bill_printer = BillPrinter()
cities = Cities()
bill_types = BillTypes()


def main():
    print("Welcome to the italian lotto ticket generator!")
    num_of_bills = game.start()
    if num_of_bills == 0:
        return 0
    bills = []
    for bill in range(num_of_bills):
        numbers = []
        cities.print()
        city = input("Enter city name: ")
        bill_types.print()
        choice = int(input("Enter number here: "))
        bill_type = bill_types.TYPES[choice - 1]
        print(bill_type.upper())
        num_amount = int(input(f"How many numbers do you want to generate? Min:{choice} Max:10 "))
        while num_amount < choice:
            print("Please insert a valid number amount!")
            num_amount = int(input(f"How many numbers do you want to generate? Min:{choice} Max:10 "))
        for num in range(num_amount):
            numbers.append(extraction.extract_number())
        bills.append(Bill(bill_type.upper(), city.capitalize(), numbers, bill))
        print("\n")
    bill_printer.print_tickets(bills)
    game.finish()

if __name__ == "__main__":
    main()
