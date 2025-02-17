def possible_change(dollar_amount, number_coins):
    quarter, dime, nickel, penny = 0.25, 0.10, 0.05, 0.01
    if dollar_amount == 0:
        if number_coins == 0: 
            return True
        elif number_coins > 0:
            return False

    if dollar_amount > 0 and number_coins == 0:
        return False

    if dollar_amount >= quarter: 
        if possible_change(dollar_amount - quarter, number_coins - 1):
            return True
    if dollar_amount >= dime:
        if possible_change(dollar_amount - dime, number_coins - 1):
            return True
    if dollar_amount >= nickel:
        if possible_change(dollar_amount - nickel, number_coins - 1):
            return True
    if dollar_amount >= penny:
        if possible_change(dollar_amount - penny, number_coins - 1):
            return True   
    return False


if __name__ == "__main__":
    user_dollar_amount = float(input("Enter an amount in dollars: "))
    user_coins_number = int(input("Enter the number of coins: "))
    if possible_change(user_dollar_amount, user_coins_number):
        print("A total of ${:.2f} can be formed using {} coins.".format(user_dollar_amount, user_coins_number))
    else:
        print("A total of ${:.2f} cannot be formed using {} coins.".format(user_dollar_amount, user_coins_number))