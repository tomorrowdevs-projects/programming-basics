
import random

number = random.randint(0, 38)
red_numbers = 1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36

if number == 37:
    print("Pay 0")
if number == 38:
    print("Pay 00")
print("The spin resulted in" , number)
print("Pay", number)
if number in red_numbers:
    print("Pay red")
else:
    print("Pay black")
if number <=36:
    if number % 2 == 0:
        print("Pay even")
    else:
        print("Pay_odd")
if number >=1 <= 18:
    print("Pay 1 to 18")
else:
    print("Pay 19 to 36")


