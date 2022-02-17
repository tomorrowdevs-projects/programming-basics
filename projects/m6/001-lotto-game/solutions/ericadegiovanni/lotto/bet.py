
'''
Handle the creation of the bet from the user.
Ask for a bill type to insert and if is correct return it.
'''
class Bet:

    bet_types = ['ambata', 'ambo', 'terno', 'quaterna', 'cinquina']
    
    @staticmethod
    def get_bet() -> str:
        
        while True:
            try:
                bet_name = input('Select a type of bill between AMBATA AMBO TERNO QUATERNA and CINQUINA:\n').lower()   
                if bet_name in Bet.bet_types:
                    return bet_name
                else:
                    raise ValueError
            except ValueError:
                print(f'{bet_name} is not valid.')
        
        
  