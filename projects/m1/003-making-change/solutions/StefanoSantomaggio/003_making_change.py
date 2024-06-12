cents_user = int(input('How many cents do you have? '))

toonie = cents_user / 200
cents_user %= 200

loonie = cents_user / 100
cents_user %=100

quarter = cents_user / 25
cents_user %= 25

dime = cents_user / 10
cents_user %= 10

nickel = cents_user / 5
cents_user %= 5

penny = cents_user / 1

print(f'Change: {int(toonie)} toonies, {int(loonie)} loonies, {int(quarter)} quarters, {int(dime)} dimes, {int(nickel)} nickels, {int(penny)} penny.')