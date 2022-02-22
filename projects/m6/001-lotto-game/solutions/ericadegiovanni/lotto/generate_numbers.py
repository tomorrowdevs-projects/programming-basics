
from random import sample

'''
Handle the creation of the ticket numbers from the user.
Ask for a total amount of numbers to insert and if they are correct return a list of random numbers.
'''

class TicketNumbers:
   
    @staticmethod
    def get_number() -> list[int]:
        while True:
            try:
                n_to_generate = input('Insert the amount of numbers to generate (MAX 10):\n')  
                if n_to_generate.isdigit():
                    if 0 < int(n_to_generate) < 11:
                        return sample([n for n in range(1, 91)], int(n_to_generate)) 
                    else:
                        raise ValueError
                else:
                    raise ValueError
            except ValueError:
                    print(f'{n_to_generate} is not valid.')

