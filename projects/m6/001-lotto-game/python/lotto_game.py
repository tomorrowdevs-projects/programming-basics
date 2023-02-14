from lotto.game import Game

def enter_bill_number() -> int:
    """Allows the user to enter the number of bills.
    
    :return: the number of bills chosen by the user
    :rtype: int
    """
    input_validity = False
    while not input_validity:
        try:
            bill_number = int(input("\n>> Enter the number of bills you want to generate: "))
            if is_valid_input(bill_number):
                input_validity = True
            else:
                print("Invalid input! The number of bills must be between {} and {} (or 0 to exit).".format(Game.min_number_bills, Game.max_number_bills))
        except ValueError:
            print("Invalid input! Enter a numeric value.")
    return bill_number

def is_valid_input(entered_number: int) -> bool:
    """Check that the input is valid.
    
    :param entered_number: the number of bills entered by the user
    :type entered_number: int
    :return: `True` if the number is between 0 and 5, `False` otherwise
    :rtype: bool
    """
    return Game.min_number_bills <= entered_number <= Game.max_number_bills or entered_number == 0

def start(bill_number: int) -> None:
    """Starts a new game session, by generating bills.
    
    :param bill_number: the number of bills chosen by the user
    :type bill_number: int
    """
    if bill_number == 0:
        quit()
    new_game = Game(bill_number)
    print()
    Game.generate_bills(new_game)

if __name__ == "__main__":
        bill_to_generate = enter_bill_number()
        start(bill_to_generate)
