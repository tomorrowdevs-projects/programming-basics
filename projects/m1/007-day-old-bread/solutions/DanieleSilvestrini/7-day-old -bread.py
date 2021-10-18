import re

def total():
    user = input("Enter number of loaves purchased:\n")
    if not re.match("^[0-9]+$", user):
        print('This is not allowed')
        total()
    else:
        loaves_total = int(user)
        price_regular = round(3.49 * loaves_total, 2)
        discount = round(price_regular * 60 / 100, 2)
        total_price = round(price_regular - discount, 2)
        print("The price is:\n" + str(total_price))
        print("The regular price would be:\n" + str(price_regular))
        print("The discount for day-old bread is:\n" + str(discount))

total()