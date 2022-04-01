
import random

class lotto_card:
    citys = ['bari', 'cagliari', 'firenze', 'genova', 'milano', 'napoli', 'palermo', 'roma', 'torino', 'venezia', 'tutte']
    play = ['ambata','ambo','terno','quaterna','cinquina']

    def __init__(self,bet_type: int, numbers: int, city: str):

        #data verification
        assert 2 <= numbers <= 10 , f"the numbers must between 2 and 10"
        assert city.lower() in self.citys, f"City not valid"
        assert bet_type.lower() in self.play, f"Bet type not valid"
        assert numbers >= self.play.index(bet_type.lower()), f"The numbers must be greater of equal to winners"

        #Assign to self object
        self.bet_type = bet_type.lower()
        self.numbers = []
        self.city = city.lower()

        #generate non duplicate - random numbers 
        while len(self.numbers) < numbers:
            ran_num = random.randint(1,90)
            if ran_num not in self.numbers:
                self.numbers.append(ran_num)

def main():
    lotted = lotto_card('ambo',5,'milano',)
    print(lotted)
if __name__ == '__main__':
    main()