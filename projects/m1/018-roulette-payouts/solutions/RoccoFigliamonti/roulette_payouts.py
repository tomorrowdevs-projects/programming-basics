"""# Roulette Payouts

A roulette wheel has 38 spaces on it.
Of these spaces, 18 are black, 18 are red, and two are green.
The green spaces are numbered 0 and 00.
The red spaces are numbered 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30 32, 34 and 36.
The remaining integers between 1 and 36 are used to number the black spaces.
Many different bets can be placed in roulette.

We will only consider the following subset of them in this exercise:
- Single number (1 to 36, 0, or 00)
- Red versus Black
- Odd versus Even (Note that 0 and 00 do not pay out for even)
- 1 to 18 versus 19 to 36

Write a program that simulates a spin of a roulette wheel by using a random number generator.
Display the number that was selected and all of the bets that must be payed.

For example, if 13 is selected then your program should display:

```
The spin resulted in 13...
Pay 13
Pay Black
Pay Odd
Pay 1 to 18
```

If the simulation results in 0 or 00 then your program should display `Pay 0` or `Pay 00` without any further output.
"""

from random import randint

number = randint(0,37)
"""if number == 37:
    number = "00"""

tot_num = {i for i in range(0,38)}
red_num = {1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36}
green_num = {37, 0}
black_num = tot_num.copy()
black_num = black_num - red_num - green_num

"""print(tot_num)
print(red_num)
print(green_num)
print(black_num)"""

if number == 37:
    print("The number extracted is: 00")
    print("Pay 00")
    print("Pay Green")
else:
    print(f"The number extracted is: {number}")
    print(f"Pay {number}")
    if number == 0:
        print("Pay Green")
    if number in red_num:
        print("Pay Red")
    if number in black_num:
        print("Pay Black")
    if 0 < number < 19:
        print("Pay 1 to 18")
    if 18 < number < 37:
        print("Pay 19 to 36")
    if number % 2 == 0 and 0 < number <37:
        print("Pay Even")
    if number%2 != 0 and number <37:
        print("Pay Odd")



