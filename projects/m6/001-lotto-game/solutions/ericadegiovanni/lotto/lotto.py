from .ticket import Ticket
from .bet import Bet
from .generate_numbers import TicketNumbers
from .cities import Cities

'''
parameter bill_numbers inserted by the user at the launch of the software.
- Ask the user informations (type of bill, city, amount of numbers)
- Create tickets and print them
'''
class Lotto:

    all_tickets = []

    def __init__(self, bill_numbers): 
        print(f"--------- LOTTO GAME ---------\nYou want to generate {bill_numbers} ticket{'' if bill_numbers == 1 else 's'}.\n")   

        for n in range(1, bill_numbers + 1):
            print(f'- TICKET {n} -')
            
            bet, city, numbers = self.get_input()
            ticket = self.create_tickets(bet, city, numbers)
                       
            Lotto.all_tickets.append(ticket)
            
        self.print_tickets()
        
    @staticmethod
    def get_input():
        ''''
        ask input to the user
        check if the input are correct
        return the input
        '''

        bet = Bet.get_bet()
        city = Cities.get_city()
        numbers = TicketNumbers.get_numbers_to_generate()
        return bet, city, numbers
    
    @staticmethod
    def create_tickets(bet, numbers, city, n):
        return Ticket(bet, numbers, city, n)


    @staticmethod
    def print_tickets():
        for ticket in Lotto.all_tickets:
            print(ticket)
  

    
