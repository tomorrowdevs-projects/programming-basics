
from random import sample

'''
Handle the creation of the ticket numbers from the user.
Ask for a total amount of numbers to insert and if they are correct return a list of random numbers.
'''

class TicketNumbers:

    @staticmethod
    def get_number_input():
        num = input('Insert the amount of numbers to generate (MAX 10):\n')  
        if num.isdigit() and int(num) < 90:
            if 0 < int(num) < 11:
                return sample([n for n in range(1, 91)], int(num)) 
        else:
            print(f'{num} is not valid.')
            raise ValueError
        
           
    @staticmethod
    def check_number() -> list[int]:
        while True:
            try:
                numbers_2play = TicketNumbers.get_number_input()
                return numbers_2play
            except (ValueError): pass

