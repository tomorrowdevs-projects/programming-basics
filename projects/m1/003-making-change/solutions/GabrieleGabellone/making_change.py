#MAKING CHANGE

change_in_cents = int (input("How many cents do you have? "))
print("Ok, they have been changed to:")
if change_in_cents >= 200:
    toonies = int (change_in_cents / 200)
    change_in_cents = change_in_cents % 200
    print (toonies, "toonies")
if change_in_cents >= 100:
    loonies = int (change_in_cents / 100)
    change_in_cents = change_in_cents % 100
    print (loonies, "loonies")
if change_in_cents >= 25:
    quarters = int (change_in_cents / 25)
    change_in_cents = change_in_cents % 25
    print (quarters, "quarters")
if change_in_cents >= 10:
    dimes = int (change_in_cents / 10)
    change_in_cents = change_in_cents % 10
    print (dimes, "dimes")
if change_in_cents >= 5:
    nickels = int (change_in_cents / 5)
    change_in_cents = change_in_cents % 5
    print (nickels, "nickels")
if change_in_cents >= 1:
    pennies = int (change_in_cents / 1)
    print (pennies, "pennies")