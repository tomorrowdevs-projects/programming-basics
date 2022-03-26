
from random import sample
from itertools import combinations
'''
Create a lotto extraction table
validate matching numbers between a ticket and the extraction object
'''

class Extraction:

    def __init__(self):
        self.extraction = self.lotto_extraction()

    def lotto_extraction(self):

        total_cities = ['bari', 'cagliari', 'firenze', 'genova', 'milano', 'napoli', 'palermo','roma', 'torino', 'venezia', 'tutte']
        extraction = {}
        
        for city in total_cities:
            if city != 'tutte':
                extraction[city] = sample(range(1,91), k=5)
        
        return extraction

    def matching_numbers(self, city, tk) -> list:
        
        #return a list of the common numbers between the ticket and the city wheel
        return list(set(self.extraction[city]) & set(tk.nums))


    def check_bet_combinations(self, tk) -> dict:

        """
        Check if the amount of common numbers between the tk and the city wheel is matching with the bet.
        return a dict with winning 'bet'(key): all the combinations for that bet combinations(value).
        ex : {'ambo': 2}
        """
        winning_wheel = {}
        bets = {"ambata": 1, "ambo": 2, "terno": 3, "quaterna": 4, "cinquina": 5}
        
        #loop trough all the cities of the extraction table
        for city in self.extraction:

            # list of matching numbers between this city wheel and the tk
            numbers = self.matching_numbers(city, tk)
            
            # loop trough all the tk bets
            for b in tk.bets_list:

                bet = bets[b.bet_type] #int type of bet in the ticket (es ambo -> 2)
            
                if bet <= len(numbers):
                    
                    if tk.city == city:

                        # find all the possible bet combinations between all the matching numbers
                        winning_wheel[b.bet_type]  = len(list(combinations(numbers, bet)))
                    
                    elif tk.city == 'tutte':
                        if b.bet_type in winning_wheel:
                            winning_wheel[b.bet_type] +=  len(list(combinations(numbers, bet)))
                        else:
                            winning_wheel[b.bet_type]  = len(list(combinations(numbers, bet)))

        return winning_wheel




        
