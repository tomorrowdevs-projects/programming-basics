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
        print(f"\n--------- LOTTO GAME ---------\nYou want to generate {bill_numbers} ticket{'' if bill_numbers == 1 else 's'}.")   
        
        for n in range(1, bill_numbers + 1):
            print(f'\n- TICKET {n} -')

            bet, city, numbers = Lotto.get_input()
            ticket = Ticket(bet, numbers, city, n)                      
            Lotto.all_tickets.append(ticket)
                  

    def make_extraction():
    
        extraction = Extraction.lotto_extraction()
        Lotto.extraction = extraction
    

    def check_winning_numbers(tk):

        '''
        Check the matching numbers between ticket numbers and extractions:
        return int if bet is a city name
        return dict if bet == 'tutte'
        '''
            
        if tk.city != 'tutte':
            winning_numbers = 0
            extracted = Lotto.extraction[tk.city]
            for n in tk.nums:
                if n in extracted: winning_numbers += 1
            
            return winning_numbers
        
        else:
            winning_numbers = {}

            for city in Lotto.extraction:
                
                for n in tk.nums:
                    if n in Lotto.extraction[city]:
                        if city not in winning_numbers:
                            winning_numbers[city] = 1
                        else:
                            winning_numbers[city] += 1
                    
            return winning_numbers
    
    
    def check_winning_ticket():
        '''
        Check if the winning numbers match to the bet on the ticket
        if is a winning ticket append it in Lotto.winning_tickets
        and save the winning message in the ticket object variable winning_message
        '''

        for tk in Lotto.all_tickets:

            bet = Bet.bet_types.index(tk.bet_type) + 1 
            winning_numbers = Lotto.check_winning_numbers(tk)

            if type(winning_numbers) is int:

                #check winning ticket(city bets)
                if winning_numbers >= bet:
                    tk.winning_message.append(f'You made {tk.bet_type} on {tk.city.capitalize()}!')
                    Lotto.winning_tickets.append(tk)

            else:
                #check winning tickets ('tutte' bet)
                if len(winning_numbers) > 0:
   
                    for city in winning_numbers:

                        if winning_numbers[city] >= bet:
                            tk.winning_message.append(f'You made {tk.bet_type} on {city.capitalize()}!')
                            if tk not in Lotto.winning_tickets:
                                Lotto.winning_tickets.append(tk)

                        


              
        





  
    
            
        
