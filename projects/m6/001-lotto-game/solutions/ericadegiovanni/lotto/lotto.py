from .ticket import Ticket
from .bet import Bet
from .generate_numbers import TicketNumbers
from .cities import Cities
import argparse

'''
parameter bill_numbers inserted by the user at the launch of the software from main with Lotto.arg_parser().
'''
class Lotto:

    all_tickets = []

    @staticmethod
    def arg_parser():
        '''
         Handle the insertion of the number of tickets desired by the user and check if they are correct.
         Return that number of tickets.
        '''

        parser = argparse.ArgumentParser(description="Create Lotto bills")  
        parser.add_argument(
            '-n',
            type=int,
            help="Number of bills to generate.",
            default=0,
            choices= range(1, 6))

        args = parser.parse_args()
        tot_bills = args.n       
        return tot_bills

    @staticmethod
    def get_input():
        '''
       ask the user informations (type of bill, city, amount of numbers)
       return them after checking if there is a correct relation with each other
        '''

        bet = Bet.check_bet()
        numbers = TicketNumbers.check_number()
        
        # check the correct relation between bet and numbers
        check = False
        while check == False:
            if Bet.bet_types.index(bet) + 1 > len(numbers):
                print(f"You can't bet {bet} and play only {len(numbers)} number{'' if len(numbers) == 1 else 's'}\nPlease insert a correct bet.")

                bet = Bet.check_bet()
                numbers = TicketNumbers.check_number()   
            else: 
                check = True

        city = Cities.check_city()

        return bet, city, numbers

    def tk_creation(bill_numbers):
        print(f"\n--------- LOTTO GAME ---------\nYou want to generate {bill_numbers} ticket{'' if bill_numbers == 1 else 's'}.\n")   
        
        for n in range(1, bill_numbers + 1):
            print(f'- TICKET {n} -')

            bet, city, numbers = Lotto.get_input()
            ticket = Ticket(bet, numbers, city, n)                      
            Lotto.all_tickets.append(ticket)
            
        

    




  
    
            
        
