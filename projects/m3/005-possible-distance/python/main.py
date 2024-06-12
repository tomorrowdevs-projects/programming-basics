def possible_change(amount,coins):    #the amount must be in cents
    quarters = 25
    dimes = 10
    nickels = 5
    pennies = 1
    if amount == 0 and coins == 0:
        return True
    if coins > 0:
        if coins * quarters <= amount:
            if possible_change(amount-quarters,coins-1):
                return True
        if coins * dimes <= amount:
            if possible_change(amount-dimes,coins-1):
                return True
        if coins * nickels <= amount:
            if possible_change(amount-nickels,coins-1):
                return True
        if coins * pennies <= amount:
            if possible_change(amount-pennies,coins-1):
                return True
    return False

def main():
    user_amount = float(input("Enter the amount in $: "))
    user_coins = int(input("Enter the number of coins: "))
    user_amount = user_amount * 100    #converting amount in cents
    if possible_change(user_amount,user_coins) == True:
        print(("The entered amount CAN be formed using {} coins.") .format(user_coins))
    else:
        print(("The entered amount CANNOT be formed using {} coins.") .format(user_coins))

if __name__ == "__main__":
    main()


    