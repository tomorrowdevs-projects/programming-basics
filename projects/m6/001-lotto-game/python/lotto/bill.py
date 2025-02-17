import random

from lotto.bet_type import BetType
from lotto.city import City

class Bill():
    """Represents a lottery bill.
    
    :param max_numbers_per_bill: the maximum amount of random numbers that can be generated for each bill, defaults to 10
    :type max_numbers_per_bill: int
    :param min_random_number: the smallest random number that can be generated, defaults to 1
    :type min_random_number: int
    :param max_random_number: the largest random number that can be generated, defaults to 90
    :type max_random_number: int
    """
    max_numbers_per_bill = 10
    min_random_number = 1
    max_random_number = 90
    
    def __init__(self, bet_type: str, numbers_to_generate: int, city: str) -> None:
        """Constructor method.
        
        :param bet_type: the type of bet chosen
        :type bet_type: str
        :param numbers_to_generate: the amount of numbers to generate in a bill
        :type numbers_to_generate: int
        :param city: city on you have bet
        :type city: str
        :param generated_numbers: list containing randomly generated numbers
        :type generated_numbers: list
        """
        self.bet_type = bet_type
        self.numbers_to_generate = numbers_to_generate
        self.city = city
        self.generated_numbers = Bill.generate_numbers(self)

    def choose_bet_type() -> str:
        """Asks the user to choose the type of bet, returns the bet-type chosen by the user.
        
        :return: a string containing the bet-type
        :rtype: str
        """
        choose = input(">> Choose the type of bet: ").lower().strip()
        while not BetType.is_a_valid_type(choose):
            if choose == "help":
                print(BetType.bet_table())
            else:
                print("Error! '{}' is not an allowed type of bet.".format(choose))
            choose = input(">> Choose a valid bet type (or enter 'help' to see the types of bets available): ").lower().strip()
        return choose

    def choose_numbers(bet_type) -> int:
        """Asks the user to choose how many numbers to generate, returns the number chosen by the user.

        :param bet_type: the bet-type chosen by the user
        :rtype: str
        :return: the number chosen by the user
        :rtype: int
        """
        is_a_valid_number = False
        while not is_a_valid_number:
            try:
                numbers = int(input(">> How many numbers you want to generate? "))
                if BetType.is_a_valid_bet(bet_type, numbers):
                    is_a_valid_number = True
                else:
                    print("Error! For an '{}' bet, at least {} numbers must be generated.".format(bet_type, BetType.min_per_type[bet_type]))
            except ValueError:
                print("Error! Enter a numeric value.")
        return numbers

    def choose_city() -> str:
        """Asks the user to choose which city to play on, returns the city chosen by the user.

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
                
    def generate_numbers(self) -> list:
        """Returns a list of randomly generated numbers.
        
        :return: list of random numbers
        :rtype: list
        """
        gen_num = set()
        while len(gen_num) < self.numbers_to_generate:
            gen_num.add(random.randint(Bill.min_random_number, Bill.max_random_number))
        return sorted(list(gen_num))

    def __str__(self) -> str:
        """Returns a string representing a lottery bill.
        
        :returns: a string containing a representation of a bill
        :rtype: str
        """
        dashed_line = "+{:-^30}+\n".format("")
        title_line = "|{:^30}|\n".format("Lotto Ticket")
        city_line = "|{:14}{:^16}|\n".format("  CITY       |", self.city)
        bet_line = "|{:14}{:^16}|\n".format("  BET TYPE   |", self.bet_type)
        max_num_per_row = 5
        numbers_line = "|"
        for n in range(Bill.max_numbers_per_bill):
            if n == max_num_per_row:
                numbers_line += "|\n|"
            if n < len(self.generated_numbers):
                numbers_line += "{:^6}".format(self.generated_numbers[n])
            else:
                numbers_line += "      "
        numbers_line += "|\n"
        representation = "{}{}{}{}{}{}{}{}".format(dashed_line, title_line, dashed_line, city_line, bet_line, dashed_line, numbers_line, dashed_line)
        return representation
