
from random import random

red_position = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
black_position = []
first_half = []
green_position = ['0', '00']

def create_roulette(i):

    i += 1

    if i <= 36:
        if red_position.__contains__(i) == False:
            black_position.append(i)
        if i >= 1 and i <= 18:
            first_half.append(i)
        create_roulette(i)
    
    i -= 1


def spin():
    i = 0
    create_roulette(i)
    spinned_number = int(random()*36+1)

    win = f"\nPay {spinned_number}"
        
    if spinned_number in green_position:
        print(win)
    else:
        if spinned_number % 2 == 0:
            win += "\nPay Even"
        else:
            win += "\nPay Odd"

        if spinned_number in red_position:
            win += "\nPay Red"
        else:
            win += "\nPay Black"

        if spinned_number in first_half:
            win += "\nPay 1 to 18"
        else:
            win += "\nPay 19 to 36"
        
        print(win + "\n")

    
print("\nWelcome to our roulette!")

spin()