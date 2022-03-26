from .ticket import Ticket
from .bet import Bet
from .generate_numbers import TicketNumbers
from .cities import Cities
from .extraction import Extraction
from .prizes import Prizes
import argparse


class Lotto:

    all_tickets = []
    winning_tickets = [] 

    #TICKET CREATION 

    # Terminal input handling
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
    
    # get user input for the creation of the tickets
    def get_input(): 
        '''
        ask the user informations (city, amount of numbers, bet(type of bet and money))
        return the parameters that will be used to create the ticket (bet_list, city, numbers)
        '''
        # ask the wheel
        city = Cities.ask_city()

        # ask an amount n to create a list of n random numbers
        numbers = TicketNumbers.ask_numbers()
        
        # ask the type of bets and the amount money to put on them
        bets_list = Bet.ask_bets(numbers)
        
        return bets_list, city, numbers


    def tk_creation(bill_numbers): 
  
        """
        bill_numbers: number of tickets desired by the user
        create n ticket objects and append them in lotto.all_tickets
        create a ticket object from the parameters obtained in Lotto.get_input()
        """
        print(f"\n--------- LOTTO GAME ---------\nYou want to generate {bill_numbers} ticket{'' if bill_numbers == 1 else 's'}.")   
        
        for n in range(1, bill_numbers + 1):
            print(f'\n- TICKET {n} -')

            bet, city, numbers = Lotto.get_input()
            ticket = Ticket(bet, numbers, city, n)                      
            Lotto.all_tickets.append(ticket)



    # EXTRACTION 
    def make_extraction():
        """ Create an extraction  attribute in Lotto class"""

        extraction = Extraction()
        Lotto.extraction = extraction


    # CHECK WINNING COMBINATIONS 
    def define_tk_victory():
        '''
        Create the tk.victory attibute for the class Ticket.
        if is a winning ticket append the victoy informations to the attribute Ticket.victory,
        else append an empty dictionary.
        '''        

        #Loop trough all the tikets
        for tk in Lotto.all_tickets:
            
            # Define the victory (empty dict if no victory)
            victory = Lotto.extraction.check_bet_combinations(tk)

            # add to Ticket object victory informations
            if victory:
               tk.victory = victory 
               Lotto.winning_tickets.append(tk)
            

    # CALCULATE PRIZE
    def add_prize():

        """Calculate the prize for each winning ticket"""

        for tk in Lotto.winning_tickets: 
            tk.prize = Prizes.calc_prize(tk)   
                        


              
        





  
    
            
        
