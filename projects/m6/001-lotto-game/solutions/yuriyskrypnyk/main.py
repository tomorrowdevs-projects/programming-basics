from lotto_game.lotto import Lotto


def chose_bills():
    """ The function that asks the user how many tickets to generate """
    while True:
        try:
            chose_client = int(input("Chose how many bills do you want ot generate(from 1 to 5, 0 to exit):\n"))
            if chose_client == 0:
                print("Good buy. See you next time!")
                break
            elif chose_client > 5:
                print("The number is greater than 5!")
            else:
                Lotto(chose_client)

                break

        except ValueError:
            print("Oops!  That was no valid number.  Try again...")


if __name__ == '__main__':
    chose_bills()

