import random

red_number=(1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36)
green_number=(-1,0)

number=random.randint(-1,36)

if number==-1:
    print("00 is the extracted number!".format(number))
    print("Pay for 00 number!")
else:print("{} is the extracted number!".format(number))

if number==0:
    print("Pay for 0 number!")

if number in red_number:
    print("Pay for red number!")

if number not in red_number and number not in green_number:
    print("Pay for black number!")

if (number%2==0 and number!=-1 and number!=0):
    print("Pay for even number!")
elif number!=-1 and number!=0:
    print("Pay for odd number!")

if 1<=number<=18:
    print("Pay for 1 to 18 number!")
if 18<number<=36:
    print("Pay for 19 to 36 number!")  



