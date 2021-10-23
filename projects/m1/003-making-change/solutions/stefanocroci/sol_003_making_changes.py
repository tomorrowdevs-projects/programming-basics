# number of cents from the user as an integer
cents = int(input('Insert number of cents as an integer: '))

# calculation of the number of coins for each type using as few coins as possible

# method one: without using the % operator

# toonies = cents // 200
# loonies = (cents - toonies * 200) // 100
# quarters = (cents - toonies * 200 - loonies * 100) // 25
# dimes = (cents - toonies * 200 - loonies * 100 - quarters * 25) // 10
# nickels = (cents - toonies * 200 - loonies * 100 - quarters * 25 - dimes * 10) // 5
# pennies = (cents - toonies * 200 - loonies * 100 - quarters * 25 - dimes * 10 - nickels * 5) // 1

# method two: with the % operator

toonies = cents // 200
toonies_remainder = cents % 200
loonies = toonies_remainder // 100
loonies_reminder = toonies_remainder % 100
quarters = loonies_reminder // 25
quarters_reminder = loonies_reminder % 25
dimes = quarters_reminder // 10
dimes_reminder = quarters_reminder % 10
nickels = dimes_reminder // 5
nickels_reminder = dimes_reminder % 5
pennies = nickels_reminder // 1

# display the denominations of the coins
print('Your change is:')
print('toonies: ' + str(toonies))
print('loonies: ' + str(loonies))
print('quarters: ' + str(quarters))
print('dimes: ' + str(dimes))
print('nickels: ' + str(nickels))
print('pennies: ' + str(pennies))
