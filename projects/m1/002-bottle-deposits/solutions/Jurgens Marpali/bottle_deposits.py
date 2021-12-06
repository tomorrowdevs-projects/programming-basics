print("Hello, i'm a bottle deposit that will calculate how much money you need to have based on your bottles.")
small_ones = input('Select the quantity of bottles with one liter or less: ')
if not small_ones.isnumeric():
    print("This is not a number, i guess you have zero bottles of this kind :)");
    small_ones=0
else:
    small_ones = int(small_ones)


if small_ones>0:
    deposit = small_ones*0.10
elif small_ones<0:
    small_ones=0
    print("I think you're just testing my patience")

big_ones = input('Select the quantity of bottles with one or more liters: ')
if not big_ones.isnumeric():
    print("This is not a number, i guess you have zero bottles of this kind :)")
    big_ones=0
else: 
    big_ones = int(big_ones)

if big_ones>0:
    deposit = big_ones*0.25
elif big_ones<0:
    big_ones=0
    print("You can't have a negative number of bottles in your hand, at least not in this universe")

if small_ones>0 or big_ones>0:
    deposit = small_ones*0.10 + big_ones*0.25
    print("Your total is %.2f" % deposit, "$")
else:
    print("Nothing for you here :)")