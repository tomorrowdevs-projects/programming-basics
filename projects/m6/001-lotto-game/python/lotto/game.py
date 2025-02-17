from lotto.bill import Bill

class Game():
    """Represents a game of the lottery game.
    :param min_number_bills: the minimum number of bills that can be played, defaults to 1
    :type min_number_bills: int
    :param max_number_bills: the maximum number of bills that can be played, defaults to 5
    :type max_number_bills: int
    """
    min_number_bills = 1
    max_number_bills = 5

    def __init__(self, number_of_bills: int) -> None:
        """Constructor method.
        
        :param number_of_bills: the number of bills to be generated in the game
        :type number_of_bills: int    
        :param bills_generated: bills generated in the game
        :type bills_generated: list
        """
        self.number_of_bills = number_of_bills
        self.bills_generated = []
    
    def generate_bills(self) -> None:
        """Generate bills by asking the user for the bet-type, how many numbers to generate and the city.
        """
        for bill in range(self.number_of_bills):
            bet_type = Bill.choose_bet_type()
            numbers = Bill.choose_numbers(bet_type)
            city = Bill.choose_city()
            self.bills_generated.append(Bill(bet_type, numbers, city))
            print("Bill no. {} successfully generated!\n".format(bill+1))
