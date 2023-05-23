exchangetoCoin = float(input("Please insert the amount of change"))*100

print("We are going to give you: ")

currentCoin = 200
if exchangetoCoin >= currentCoin:
    changeIn2Euros = exchangetoCoin / currentCoin
    changeLeft = int(exchangetoCoin) % int(currentCoin)
    print(str(int(changeIn2Euros)) + " coins of 2 euros")


currentCoin = 100
if changeLeft >= currentCoin:
    changeIn1Euros = changeLeft / currentCoin
    changeLeft = int(changeLeft) % int(currentCoin)
    print(str(int(changeIn1Euros)) + " coins of 1 euros")


currentCoin = 50
if changeLeft >= currentCoin:
    changeIn50Cents = changeLeft / currentCoin
    changeLeft = int(changeLeft) % int(currentCoin)
    print(str(int(changeIn50Cents)) + " coins of 50 cents")


currentCoin = 20
if changeLeft >= currentCoin:
    changeIn20Cents = changeLeft / currentCoin
    changeLeft = int(changeLeft) % int(currentCoin)
    print(str(int(changeIn20Cents)) + " coins of 20 cents")


currentCoin = 10
if changeLeft >= currentCoin:
    changeIn10Cents = changeLeft / currentCoin
    changeLeft = int(changeLeft) % int(currentCoin)
    print(str(int(changeIn10Cents)) + " coins of 10 cents")


currentCoin = 5
if changeLeft >= currentCoin:
    changeIn5Cents = changeLeft / currentCoin
    changeLeft = int(changeLeft) % int(currentCoin)
    print(str(int(changeIn5Cents)) + " coins of 5 cents")


currentCoin = 2
if changeLeft >= currentCoin:
    changeIn2Cents = changeLeft / currentCoin
    changeLeft = int(changeLeft) % int(currentCoin)
    print(str(int(changeIn2Cents)) + " coins of 2 cents")


currentCoin = 1
if changeLeft >= currentCoin:
    changeIn1Cents = changeLeft / currentCoin
    changeLeft = int(changeLeft) % int(currentCoin)
    print(str(int(changeIn1Cents)) + " coins of 1 cents")