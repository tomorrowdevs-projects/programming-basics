from itertools import combinations_with_replacement

def possible_change(usr_amount, num_coin, index=0, l=[25, 10, 5, 1]):
    """
    Take an amount of dollars and a number of coin as
    a parameter and return true if the amount is divisible by the
    number of coin. The function uses 'combinations with replacement'
    wich produce all the possible combinations of the different kind of coins 
    in 'l'. Then it return true if the sum of one of the combinations is equal 
    to the amount. 
    """
    possible_combinations = list(combinations_with_replacement(l, num_coin))
    if usr_amount != sum(possible_combinations[index]):
        index += 1
        if index >= len(list(possible_combinations)):
            return False
        else:
            return possible_change(usr_amount, num_coin, index)
    else:
        return True
    
def main():
        usr_dollars = float(input("Enter the amount of dollars: "))
        coins = int(input("Enter the amount of coins: "))
        usr_amount =  int(usr_dollars * 100)
        if possible_change(usr_amount, coins):
            print(f"${usr_dollars} is divisible by {coins} coins")
        else:
            print(f"${usr_dollars} is not divisible by {coins} coins")

if __name__ == "__main__":
    main()



