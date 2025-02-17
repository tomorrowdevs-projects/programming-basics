import math

money = int(input("Insert an amount of money in cents  "))

if money > 0:
    toonies = math.trunc(money / 200)
    if toonies > 0:
        print(toonies," toonies")
    money =  money % 200


if money > 0:
    loonies = math.trunc(money / 100)
    if loonies > 0:
        print(loonies," loonies")
    money =  money % 100


if money > 0:
    quarter = math.trunc(money / 25)
    if quarter > 0:
        print(quarter," quarters")
    money =  money % 25


if money > 0:
    dime = math.trunc(money / 10)
    if dime > 0:
        print(dime," dime")
    money =  money % 10

if money > 0:
    nickel = math.trunc(money / 5)
    if nickel > 0:
        print(nickel," nickels")
    money =  money % 5

if money > 0:
    penny = math.trunc(money / 1)
    if penny > 0:
        print(penny," pennies")
    money =  money % 1