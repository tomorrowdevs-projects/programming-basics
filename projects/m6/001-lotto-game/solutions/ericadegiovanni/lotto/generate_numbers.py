import random

'''
Handle the creation of the ticket numbers from the user.
Ask for a total amount of numbers to insert and if they are correct return a list of random numbers.
'''

class TicketNumbers:
   
    @staticmethod
    def get_numbers_to_generate() -> list[int]:
        while True:
            try:
                n_to_generate = int(input('Insert the amount of numbers to generate (MAX 10):\n'))   
                if 0 < n_to_generate < 11:
                    return [random.choice(range(1,91)) for _ in range(n_to_generate)]
                else:
                    raise ValueError
            except ValueError:
                    print(f'{n_to_generate} is not valid.')

