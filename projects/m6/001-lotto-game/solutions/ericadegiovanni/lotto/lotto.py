from .ticket import Ticket
from .bet import Bet
from .generate_numbers import TicketNumbers
from .cities import Cities
from .extraction import Extraction

import argparse


class Lotto:

    all_tickets = []
    winning_tickets = []
    

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
       return bet, city, numbers after checking if there is a correct relation with each other
        '''

        #create bet an nubers values
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

        # create city value
        city = Cities.check_city()

        return bet, city, numbers
    

    def tk_creation(bill_numbers):

        """
        bill_numbers : number of ticket desired by the user
        create n ticket objects and append them in lotto.all_tickets
        create a ticket object from the parameters obtained in Lotto.get_input()
        """
        print(f"\n--------- LOTTO GAME ---------\nYou want to generate {bill_numbers} ticket{'' if bill_numbers == 1 else 's'}.")   
        
        for n in range(1, bill_numbers + 1):
            print(f'\n- TICKET {n} -')

            bet, city, numbers = Lotto.get_input()
            ticket = Ticket(bet, numbers, city, n)                      
            Lotto.all_tickets.append(ticket)
                  
    
    def make_extraction():
        """ Create extraction attribute in Lotto class"""
        
        extraction = Extraction.lotto_extraction() # create an extraction table
        Lotto.extraction = extraction


    def matching_numbers(extraction, city, tk) -> list:
        
        #return a list of the common numbers between the ticket and the city wheel
        return list(set(extraction[city]) & set(tk.nums))
        
        
    def check_bet(tk, extraction) -> dict:

        """
        Check if the amount of winning numbers correspond to the bet.
        return a dict with winning cities(key): list of winning numbers(value).
            
        """
        bets = {"ambata": 1, "ambo": 2, "terno": 3, "quaterna": 4, "cinquina": 5}
        bet = bets[tk.bet_type] #int type of bet in the ticket
        winning_wheel = {}

        #loop trough all the cities of the extraction table
        for city in extraction:

            #find winning numbers for this city wheel
            numbers = Lotto.matching_numbers(extraction, city, tk)
            
            if bet <= len(numbers):
                if tk.city == city:
                    winning_wheel[city]  = numbers
                elif tk.city == 'tutte':
                    winning_wheel[city]  = numbers
            
        return winning_wheel
    
     
    def define_tk_victory(extraction):
        '''
        Create the tk.victory attibute for the class Ticket.

        if is a winning ticket append the victoy informations to the attribute Ticket.victory,
        else append an empty dictionary.
        '''        
        #Loop trough all the tikets
        for tk in Lotto.all_tickets:
            
            # Define the victory (empty dict if no victory)
            victory = Lotto.check_bet(tk, extraction)

            # append victory informations
            if victory:
               tk.victory = victory 
            else:
                tk.victory = {}
            
          

                        


              
        





  
    
            
        
