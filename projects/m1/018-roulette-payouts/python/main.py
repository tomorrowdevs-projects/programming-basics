'''
# Roulette Payouts

A roulette wheel has **38 spaces** on it.   
Of these spaces:
- 18 are red, numbered 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30 32, 34 and 36.
- 18 are black, the remaining integers between 1 and 36 are used to number the black spaces.
- 2 are green, numbered 0 and 00   

Many different bets can be placed in roulette. 
We will only consider the following subset of them in this exercise:
- Single number (1 to 36, 0, or 00)
- Red versus Black
- Odd versus Even (Note that 0 and 00 do not pay out for even) 
- 1 to 18 versus 19 to 36

Write a program that simulates a spin of a roulette wheel **by using a random number generator**.   
Display **the number that was selected and all the bets that must be paid**. 

For example, if 13 is selected then your program should display:

```
The spin resulted in 13...
Pay 13
Pay Black
Pay Odd
Pay 1 to 18
```

If the simulation results in 0 or 00 then your program should display `Pay 0` or `Pay 00` without any further output.
'''

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