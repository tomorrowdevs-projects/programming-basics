from .ticket import Ticket
from .bet import Bet
from .generate_numbers import TicketNumbers
from .cities import Cities
from .extraction import Extraction
from .prizes import Prizes
from itertools import combinations
import argparse


class Lotto:

    all_tickets = []
    winning_tickets = [] #levare

    bets = {"ambata": 1, "ambo": 2, "terno": 3, "quaterna": 4, "cinquina": 5}

    ################### TICKET CREATION ################
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

    def is_correct_bet(bets_played, numbers):

        check_bet = False

        while check_bet == False:
            bet_input = Bet.check_bet()

            # check if the bet is already played
            if bet_input in bets_played:
                print(f'You have already bet on {bet_input} try again.')
                continue
  
            # check the correct relation between bet and numbers
            if Lotto.bets[bet_input] > len(numbers):
                print(f"You can't bet {bet_input} and play only {len(numbers)} number{'' if len(numbers) == 1 else 's'}\nPlease insert a correct bet.")
                continue
            
            check_bet = True
            return bet_input

    def is_correct_money(money_played):
        check_money = False

        while check_money == False:
            money_input = Bet.check_money()
            
            # check if enough money
            if money_input > (200 - money_played):
                print(f'Not enough money, you can play max {200 - money_played}€')
                continue

            check_money = True
            return money_input
        
        

    def ask_bets(numbers):
        money_played = 0
        bets_played = []
        bets_list = []

        x = 'y'
        while x == 'y':

            bet_input = Lotto.is_correct_bet(bets_played, numbers)
            bets_played.append(bet_input)
            
            money_input = Lotto.is_correct_money(money_played)
            money_played += money_input

            bet = Bet(bet_input, money_input)
            bets_list.append(bet)
            
            # Stop asking for another bet if already played all the money or all the bets
            if money_played >= 200:
                print('you played all the possible money.')
                return bets_list
            if len(bets_played) == 5:
                print('You mad all the possible bets.')
                return bets_list

            x = input('Do you want to make another bet?\nPress y to make another one else press a key.')


        return bets_list

        

    @staticmethod
    def get_input():
        '''
       ask the user informations (type of bill, city, amount of numbers)
       return bet, city, numbers after checking if there is a correct relation with each other
        '''
        # create city value
        city = Cities.check_city()

        # ask an amount n to create a list of n random numbers
        numbers = TicketNumbers.check_number()

        bets_list = Lotto.ask_bets(numbers)
        

        return bets_list, city, numbers
    
        

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



    ################## EXTRACTION #################
    def make_extraction():
        """ Create extraction attribute in Lotto class"""
        
        extraction = Extraction.lotto_extraction() # create an extraction table
        Lotto.extraction = extraction


    ############### CHECK WINNING COMBINATIONS ####################
    def matching_numbers(extraction, city, tk) -> list:
        
        #return a list of the common numbers between the ticket and the city wheel
        return list(set(extraction[city]) & set(tk.nums))
        
        
    def check_bet_combinations(tk, extraction) -> dict:

        """
        Check if the amount of winning numbers correspond to the bet.
        return a dict with winning 'bet'(key): winning combinations(value).
            
        """
        winning_wheel = {}

        #loop trough all the cities of the extraction table
        for city in extraction:

            #find winning numbers for this city wheel
            numbers = Lotto.matching_numbers(extraction, city, tk)

            for b in tk.bets_list:

                bet = Lotto.bets[b.bet_type] #int type of bet in the ticket
            
                if bet <= len(numbers):
                    
                    if tk.city == city:
                        winning_wheel[b.bet_type]  = len(list(combinations(numbers, bet)))
                    
                    elif tk.city == 'tutte':
                        if b.bet_type in winning_wheel:
                            winning_wheel[b.bet_type] +=  len(list(combinations(numbers, bet)))
                        else:
                            winning_wheel[b.bet_type]  = len(list(combinations(numbers, bet)))

                #nome città vincente x tutte
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
            victory = Lotto.check_bet_combinations(tk, extraction)

            # add to Ticket object victory informations
            if victory:
               tk.victory = victory 
               Lotto.winning_tickets.append(tk)
            

    ############### CALCULATE PRIZE #################
    
    def calc_prize(tk):

        """Calculate the gross prize for that ticket"""

        prize = 0
        num = len(tk.nums)  # numbers played
        

        for victory in tk.victory:
            for b in tk.bets_list:

                if victory == b.bet_type:
                    prize += b.money * tk.victory[victory] * Prizes.prizes[num - 1][Lotto.bets[victory] - 1]


        if tk.city == 'tutte':
            prize /= Prizes.prize_tutte

        return prize

    def calc_net_prize(prize):
        taxes = prize * 0.08
    
        return prize - taxes

    def add_prize():
        for tk in Lotto.winning_tickets: 
            tk.prize = Lotto.calc_prize(tk)   
                        


              
        





  
    
            
        
