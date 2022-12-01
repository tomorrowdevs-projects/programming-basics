cents = int(input("Hi human, how many cents you want to exange?"))

#coins value in cents
penny = 1
nickel = 2 
dime = 10
quarter = 25
loonie = 100
toonie = 200

print('The remainder is:')
#calculating how many toonie in cents
if cents >= toonie:
    toonies = cents // toonie
#evalueting the remainder
    cents = cents % toonie
    print(toonies, 'toonies')
    
if cents >= loonie:
    loonies = cents // loonie
    cents = cents % loonie
    print(loonies, 'loonies')

if cents >= quarter:
    quarters = cents // quarter
    cents = cents % quarter
    print(quarters, 'quarters')


if cents >= dime:
    dimes = cents // dime
    cents = cents % dime
    print(dimes, 'dimes')

if cents >= nickel:
    nickels = cents // nickel
    cents = cents % nickel
    print(nickels, 'nickels')

if cents >= penny:
    pennies = cents // penny
    cents = cents % penny
    print(pennies, 'pennies')