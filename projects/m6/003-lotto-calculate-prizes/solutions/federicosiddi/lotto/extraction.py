import random
from .cities import Cities
from .bet_types import BetTypes


class Extraction:

    @staticmethod
    def extract_numbers(amount):
        """
        Function used to return a random generated numbers between 1 and 90 both ends included

        :param amount: type int, amount of random numbers to generate
        :return: type list, list of specified amount of random integer numbers between 1 and 90
        """
        random_extraction = random.sample(range(1, 91), int(amount))
        return random_extraction

    @staticmethod
    def fake_extraction():
        """
        This function generates a extraction dictionary with cities as keys
        and 5 random picked numbers between 1 and 90 as values,
        the last key "Tutte" will contain all the values of the previous keys as value
        ex. {"Bari": [22, 31, 4, 9, 66], "Cagliari": [53, 75, 2, 45, 4], ..... }

        :return: type dict, dict of cities with relative numbers extracted
        """
        extraction = {city:(random.sample(range(1, 91), 5)) for city in Cities.CITIES if city != "Tutte"}
        # extraction["Tutte"]=[]
        all_extracted_numbers = sum(extraction.values(), [])
        extraction["Tutte"] = all_extracted_numbers
        return extraction

    @staticmethod
    def check_victory(extraction, bills):
        """
        This function checks if a bill contained in bills list is a winning one.
        If it's a winning bill prints the bill number and the bill details
        and adds the bill in the winning_bills list.
        At the end the winning_bills list will be returned


        :param extraction: type dict, dictionary of cities with relative numbers extracted
        :param bills: type list, list of previously generated bills
        :return: type list, list of dicts of winning bills
        """
        winning_bills = []
        for bill in bills:
            winning_numbers = []
            print(f"{'-'*60}")
            for num in bill.numbers:
                if num in extraction[bill.city]:
                    winning_numbers.append(num)
            if len(winning_numbers) >= BetTypes.TYPES.index(bill.type) + 1:
                print(f"Congratulations, Ticket N {bill.bill_num + 1} is the winner!")
                print(f"Winning numbers {' '.join(str(x) for x in winning_numbers)} in the city of: {bill.city}, bet type was: {bill.type}")
                winning_bills.append({"Bet": (BetTypes.TYPES.index(bill.type) + 1), "Numbers": bill.numbers, "BillNum": bill.bill_num + 1, "City": bill.city})
            else:
                print(f"Sorry, Ticket N {bill.bill_num + 1} isn't winner.")
        return winning_bills


