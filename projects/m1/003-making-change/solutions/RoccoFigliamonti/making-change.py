"""# MAKING CHANGE

Consider the software that runs on a self-checkout machine. 
One task that it must be able to perform is to determine how much change to provide when the shopper pays for a purchase with cash.
Write a program that begins by reading a number of cents from the user as an integer. 
Then your program should compute and display the denominations of the coins that should be used to give that amount of change to the shopper. 
The change should be given using as few coins as possible. Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.

# Documentation

For this project solution you may use:

- Variables, expressions, statements
- Strings

# Deadline

This project requires to be completed in a maximum of **2 hours**
"""

"""
pennies= 1 cent
nickels= 5 cent
dimes= 10 cent
quarters= 25 cent
loonies= 1dollar
toonies= 2dollar
"""

price = int(input("total cost of the purchase in cents: "))
payment = int(input("total money paid in cents: "))

change = payment - price

toonies = change//200
loonies = (change-toonies*200)//100
quarters = (change-toonies*200-loonies*100)//25
dimes = (change-toonies*200-loonies*100-quarters*25)//10
nickels= (change-toonies*200-loonies*100-quarters*25-dimes*10)//5
pennies= (change-toonies*200-loonies*100-quarters*25-dimes*10-nickels*5)

moneyname = {"toonies: ": toonies, "loonies: ":loonies, "quarters: ":quarters, "dimes: ":dimes, "nickels: ":nickels, "pennies: ":pennies}

for key in moneyname:
    print(str(key)+str(moneyname[key]))


