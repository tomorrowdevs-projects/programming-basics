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

    def __init__(self, bill_numbers): 
        print(f"\n--------- LOTTO GAME ---------\nYou want to generate {bill_numbers} ticket{'' if bill_numbers == 1 else 's'}.\n")   

        for n in range(1, bill_numbers + 1):
            print(f'- TICKET {n} -')

            bet, city, numbers = self.get_input()
            ticket = self.create_tickets(bet, numbers, city, n)
                       
            Lotto.all_tickets.append(ticket)
            
        self.print_tickets()
        
    @staticmethod
    def get_input():

#       ask the user informations (type of bill, city, amount of numbers) and return them if are correct.
        bet = Bet.get_bet()
        numbers = TicketNumbers.get_number()
        city = Cities.get_city()
        return bet, city, numbers
    

    @staticmethod
    def create_tickets(bet, numbers, city, n):

#       Create a ticket object
        return Ticket(bet, numbers, city, n)


    @staticmethod
    def print_tickets():

#       Print all the Ticket objects created
        for ticket in Lotto.all_tickets:
            print(ticket)
  
    @staticmethod
    def arg_parser():
        '''
         Handle the insertion of the number of tickets desired by the user.
         Return a Lotto object and start the creation of the tickets.
        '''

        parser = argparse.ArgumentParser(description="Create Lotto bills")  
        parser.add_argument(
            '-n',
            type=int,
            help="Number of bills to generate.",
            default=0,
            choices= range(1, 6))

        args = parser.parse_args()
        total_bills = args.n       
        return Lotto(total_bills)
        
            
        
