print("Hi, This is our brand new scam-proof roulette")
import random
red_numbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
black_numbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
green_numbers = [0, 00]

#I tell the user his win possibilieites
print("You can win in many different ways:")
print("By Single Number (1 to 36, 0 or 00)")
print("Red Versus Black")
print("Odd Versus Even (0 and 00 do not pay for this)")
print("1 to 18 Versus 19 to 36 ")
bet = input("Please take your guess: ")
#i try to do a random number generator
number = random.randint(0, 38)
print("The result is ", number)

if number == 37:
    number = 00
    print("Pay 00")
elif number == 0:
    print("Pay 0")
else:
    print("Pay", number)

if number % 2 == 0:
    print("Pay Even")
else:
    print("Pay Odd")

if number in red_numbers:
    print("Pay Red Numbers")
elif number in black_numbers:
    print("Pay Black Numbers")

if 1<= number <= 18:
    print("Pay 1 to 18")
elif 19<= number <36:
    print("Pay 19 to 36")
