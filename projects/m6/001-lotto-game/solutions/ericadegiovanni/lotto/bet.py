
'''
Handle the creation of the bet from the user.
Ask for a bill type to insert and if is correct return it.
'''


class Bet:

    bet_types = ['ambata', 'ambo', 'terno', 'quaterna', 'cinquina']

    def __init__(self, bet_type, money):
        self.bet_type = bet_type
        self.money = money


    @staticmethod
    def get_bet_input():
        bet = input('Select a type of bill between AMBATA AMBO TERNO QUATERNA and CINQUINA:\n').lower()   
        if bet in Bet.bet_types:
            return bet
        else:
            print(f'{bet} is not valid.')
            raise ValueError

    @staticmethod
    def check_bet() -> str:
        while True:
            try: 
                bet = Bet.get_bet_input()  
                return bet            
            except ValueError: pass

    @staticmethod
    def get_money_input():
        money = float(input('Insert the amount of money for that bet:\n'))
        if 200 >= money >= 1:
            return money
        else:
            print(f'Amount not valid.')
            raise ValueError

    @staticmethod
    def check_money() -> float:
        while True:
            try: 
                money = Bet.get_money_input()  
                return money            
            except ValueError: pass
            
            
        
        
        
  