from itertools import combinations

class CheckVictory:

    """validate matching numbers between a ticket and the extraction object"""

    @staticmethod
    def matching_numbers(extr, city, tk) -> list:
            
            #return a list of the common numbers between the ticket and the city wheel
            return list(set(extr[city]) & set(tk.nums))

    @staticmethod
    def check_bet_combinations(extr, tk) -> dict:

        """
        Check if the amount of common numbers between the tk and the city wheel is matching with the bet.
        return a dict with winning 'bet'(key): all the combinations for that bet (value).
        ex : {'ambo': 2}
        """
        winning_wheel = {}
        bets = {"ambata": 1, "ambo": 2, "terno": 3, "quaterna": 4, "cinquina": 5}
        
        #loop trough all the cities of the extraction table
        for city in extr:

            # list of matching numbers between this city wheel and the tk
            numbers = CheckVictory.matching_numbers(extr, city, tk)
            
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
