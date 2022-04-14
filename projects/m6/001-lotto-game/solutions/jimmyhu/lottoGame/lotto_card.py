from ruote import ruota
from bet_types import bet_types
import random

class lotto_card:
    
    def __init__(self,bet_type: int, numbers: int, city: str):

        #data verification
        assert 1 <= numbers <= 10 , f"the numbers must between 1 and 10"
        assert ruota.check_ruota(city), f"City '{city}' not valid"
        assert bet_types.check_bet_type(bet_type), f"Bet type '{bet_type}' not valid"
        assert isinstance(numbers, int), f"Numbers must be a number"
        #check for avoid to have a bet type greated than the played numbers
        assert numbers >= (bet_types.play.index(bet_type.lower())+1), f"With the bet type: '{bet_type}' you have at least {bet_types.play.index(bet_type.lower())+1} numbers"

        #Assign to self object
        self.bet_type = bet_type.lower()
        self.numbers = self.randNumbers(numbers,90,1)
        self.city = city.lower()

        #generate non duplicate - random numbers 
       
    @staticmethod
    def randNumbers(len_numbers_list: int, max: int, min: int):
        assert len_numbers_list <= max, f"Error, The max value can be greated than len_numbers_list"
        assert not isinstance(len_numbers_list, bool), f"Error, The len_numbers_list can't be a boolean value"
        rand_numbers = []
        while len(rand_numbers) < int(len_numbers_list):
            ran_num = random.randint(min,max)
            if ran_num not in rand_numbers:
                rand_numbers.append(ran_num)
        return rand_numbers

def main():
    #check if the script work
    lotted = lotto_card('ambo',5,'milaNo')
    print(lotted.numbers)
    pass
if __name__ == '__main__':
    main()