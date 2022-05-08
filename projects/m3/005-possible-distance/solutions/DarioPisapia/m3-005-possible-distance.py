
def theRightCoins(dollars, coins):
    coin_values = [1, 5, 10, 25]
    if dollars == 0 and coins == 0:
        return True
    if dollars < 0 or coins < 0 or dollars > coin_values[-1] * coins:
        return False

    for n in coin_values:
        if dollars // n > coins:
            pass
        else:
            return theRightCoins(dollars - n, coins - 1)

if __name__ == "__main__":
    dollars = float(input("How many dollars? "))*100
    coins = int(input("How many coins? "))
    if theRightCoins(dollars, coins):
        print("Yes you can!")
    else:
        print("I am not a mathematician...but no...")

