from lotto_card import lotto_card

class lotto_game:
    def __init__(self,num_bills: int):

        #check if the bills is between an interval
        assert 1 <= num_bills <= 5, f"The bills to generate must be between 1 and 5" 

        #init of the array of bills
        self.bills = []

        # create all the bills with a while loop 
        while len(self.bills) < num_bills:
            generated = self.generate_bill()
            if isinstance(generated, str):
                print(generated)
            elif isinstance(generated, lotto_card):
                self.bills.append(generated)
            

    @staticmethod
    def generate_bill():
        new_bet_type = input(f"\nWrite the type of the bet:\n")
        new_numbers = int(input(f"\nHow much numbers do you want to play?\n"))
        new_city = input(f"\nWrite the city to play (aka 'Ruota'):\n")
        try:
            new_bill = lotto_card(new_bet_type,new_numbers,new_city)
            return new_bill
        except AssertionError as msg:
            return f"\n***{msg.args[0]}***\n"

    def get_bill(self,number: int):
        selected = self.bills[number-1]
        result_str = f"\n+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        result_str += f"|{'Bill Number'.center(13)}|{'Bet Type'.center(10)}|{'Ruota'.center(11)}|{'Numbers'.center(41)}|\n"
        result_str += f"+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        result_str += f"|{str(number).center(13)}|{str(selected.bet_type).center(10)}|{str(selected.city).center(11)}|{(', '.join([str(x) for x in selected.numbers])).center(41)}|\n"
        result_str += f"+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        return result_str
        

    def __repr__(self):
        final = f"\n+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        final += f"|{'Bill Number'.center(13)}|{'Bet Type'.center(10)}|{'Ruota'.center(11)}|{'Numbers'.center(41)}|"
        final += f"\n+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        for bill in self.bills:
            final += f"|{str(self.bills.index(bill)+1).center(13)}|{str(bill.bet_type).center(10)}|{str(bill.city).center(11)}|{(', '.join([str(x) for x in bill.numbers])).center(41)}|\n"
        final += f"+{'-'*13}+{'-'*10}+{'-'*11}+{'-'*41}+\n"
        return final


def main():
    print(lotto_game(1).get_bill(1))
if __name__ == '__main__':
    main()