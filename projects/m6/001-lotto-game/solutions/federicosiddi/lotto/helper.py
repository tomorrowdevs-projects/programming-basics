from lotto.cities import Cities
from lotto.bet_types import BetTypes


class InputHelper:
    """
    Class containing input helper methods to print specific input based on cities or bet types
    """
    def __init__(self):
        pass

    @staticmethod
    def city_choice_helper():
        print("Type the corresponding city name to select the bill city")
        print(*Cities.CITIES)

    @staticmethod
    def bet_choice_helper():
        print("Type the corresponding number to select the bill type:")
        for x in range(5):
            print(BetTypes.TYPES[x], end=" " + "(" + str(x + 1) + ")" + "   ")
        print("")

    @staticmethod
    def numbers_choice_helper(choice):
        print(f"How many numbers do you want to generate? Min:{choice} Max:10 ")