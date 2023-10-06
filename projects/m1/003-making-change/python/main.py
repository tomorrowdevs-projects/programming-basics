penny = 1
nickel = 5
dime = 10
quarter = 25
loonie = 100
toonie = 200

num_toonie = 0
num_loonie = 0
num_quarter = 0
num_dime = 0
num_nickel = 0
num_penny = 0

cents_user = int(input("Please insert your total coins: "))

rest = cents_user

while rest > 0:

    if rest >= toonie:
        num_toonie += int(rest / toonie)
        rest = rest % toonie
    elif rest >= loonie:
        num_loonie += int(rest / loonie)
        rest = rest % loonie
    elif rest >= quarter:
        num_quarter += int(rest / quarter)
        rest = rest % quarter
    elif rest >= dime:
        num_dime += int(rest / dime)
        rest = rest % dime
    elif rest >= nickel:
        num_nickel += int(rest / nickel)
        rest = rest % nickel
    elif rest >= penny:
        num_penny += int(rest / penny)
        rest = rest % penny


print(f"{cents_user} cents = {num_toonie} toonies, {num_loonie} loonies, "
      f"{num_quarter} quarters, {num_dime} dimes, {num_nickel} nickels, {num_penny} pennies.")
