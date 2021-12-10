#i have to get the exact change from the user
#i have to use a maximum of two digits after the comma
#i have to use pennies, nickels, dimes, quarters, loonies and toonies.
#number has to be positive

change = int(input('Hi, please write down the number of cents you have:  '))

#trying to calculate the change
toonie = change / 200
change %= 200

loonie = change / 100
change %= 100

quarter = change / 25
change %= 25

dime = change / 10
change %= 10

nickel = change / 5
change %= 5

penny = change / 1
print(f'Your change is: {int(toonie)} toonie(s), {int(loonie)} loonie(s), {int(quarter)} quarter(s), {int(dime)} dime(s), {int(nickel)} nickel(s), {int(penny)} pennies.')


