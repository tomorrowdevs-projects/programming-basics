from bet_type import BetType
from city import City
from bill import Bill

class Game():
    """Represents a game of the lottery game.

    :param min_num_bill: the minimum number of bills that can be played, defaults to 1
    :type min_num_bill: int
    :param max_num_bill: the maximum number of bills that can be played, defaults to 5
    :type max_num_bill: int
    """
    min_num_bill = 1
    max_num_bill = 5

    def __init__(self, number_of_bills: "int") -> "None":
        """Constructor method.
        
        :param number_of_bills: the number of bills to be generated in the game.
        :type number_of_bills: int    
        :param bills_generated: bills generated in the game.
        :type bills_generated: list
        """
        self.number_of_bills = number_of_bills
        self.bills_generated = []
    
    @staticmethod
    def start_game() -> "Game":
        """Instantiates an object of type 'Game'.
        
        :return: object of type 'Game'
        :rtype: Game
        """
        print("\n{:122}\n".format("LOTTO GAME"))
        bills_to_generate = input(">> Enter the number of bills to start playing ('0': exit, 'help': see instructions): ").strip()
        while not Game.is_a_valid_number(bills_to_generate):
            if bills_to_generate == "0":
                quit()
            elif bills_to_generate == "help":
                print(Game.instruction())
            else:
                print("Error! '{}' is not a number between {} and {}.".format(bills_to_generate, Game.min_num_bill, Game.max_num_bill))
            bills_to_generate = input(">> Enter the number of bills: ").strip()
        print()
        new_game = Game(int(bills_to_generate))
        Game.generate_bills(new_game)
        return new_game

    @staticmethod
    def instruction() -> "str":
        """Returns a string containing instructions to play.

        :return: a string containing instructions to play
        :rtype: str
        """
        dot_line = "{:.^122}\n".format("")
        welcome_mex = "{:^122}\n".format("Welcome to the Lotto Game!")
        text_1 = "{:122}\n".format("   How does it work?")
        ins_1 =  "\n{:122}\n".format("1. Choose how many bills you want to generate (min: {}, max: {}, 0: exit)\n".format(Game.min_num_bill, Game.max_num_bill))
        ins_2 = "{:122}\n".format("2. For each bill choose the type of bet and how many numbers you want to generate (max 10 numbers):")
        ins_3 = "{:122}\n".format("3. For each bill choose which city you want to play on. Available cities:")
        return "\n{}{}{}{}{}{}{}{}{}{}{}".format(dot_line, welcome_mex, dot_line, text_1, dot_line, ins_1, ins_2, BetType.bet_table()+"\n", ins_3, City.city_table()+"\n", dot_line)

    @staticmethod    
    def is_a_valid_number(bill_number: "str") -> "bool":  
        """Check that the bill number entered by the user is a valid number.

        :param bill_number: a string containing a number of bills
        :type bill_number: str
        :return: `True` if the number is valid, `False` otherwise
        :rtype: bool
        """
        if isinstance(bill_number, str):
            try:
                bill_number = int(bill_number)
                if Game.min_num_bill <= bill_number <= Game.max_num_bill:
                    return True
            except ValueError:
                return False
        raise ValueError("The 'bill_number' argument must be of type 'str'.")

    def generate_bills(self) -> "None":
        """Generate bills by asking the user for the bet-type, how many numbers to generate and the city.
        """
        for bill in range(self.number_of_bills):
            bet_type = Game.choose_bet_type()
            numbers = Game.choose_numbers(bet_type)
            city = Game.choose_city()
            self.bills_generated.append(Bill(bet_type, numbers, city))
            print("Bill no. {} successfully generated!\n".format(bill+1))

    def choose_bet_type() -> "str":
        """Returns the bet-type chosen by the user.
        
        :return: a string containing the bet-type
        :rtype: str
        """
        choose = input(">> Choose the type of bet: ").lower().strip()
        while not BetType.is_a_valid_type(choose):
            if choose == "help":
                print(BetType.bet_table())
            else:
                print("Error! '{}' is not an allowed type of bet.".format(choose))
            choose = input(">> Choose a valid bet type (or enter 'help' for more information): ").lower().strip()
        return choose

    def choose_numbers(bet_type) -> "int":
        """Returns the number chosen by the user.

        :param bet_type: the bet-type chosen by the user
        :rtype: str
        :return: the number chosen by the user
        :rtype: int
        """
        numbers = input(">> How many numbers you want to generate? ")
        while not BetType.is_a_valid_bet(bet_type, numbers):
            print("Error! For an '{}' bet, at least {} numbers must be generated.".format(bet_type, BetType.min_per_type[bet_type]))
            numbers = input(">> Enter a valid number: ")
        return int(numbers)

    def choose_city() -> "str":
        """Returns the city chosen by the user.

        :return: the city chosen by the user
        :rtype: str
        """
        choose = input(">> Enter the city: ").capitalize().strip()
        while not City.is_a_valid_city(choose):
            if choose.lower() == "help":
                print(City.city_table())
            else:
                print("Error! '{}' is not an available city.".format(choose))
            choose = input(">> Enter a valid city (or enter 'help' to see the available cities): ").capitalize().strip()
        return choose


if __name__ == "__main__":
    new_game = Game.start_game()
    for bill in new_game.bills_generated:
        print(bill)
    