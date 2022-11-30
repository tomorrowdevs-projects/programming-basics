"""A roulette wheel has 38 spaces on it.
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

```
The spin resulted in 13...
Pay 13
Pay Black
Pay Odd
Pay 1 to 18
```
"""

# pseudo random generators 0 and 37(00) rappresents the green spaces
import random
number = random.randrange(0, 37)

# pay 0 or 00
if number == 0:
    print(f'The spin resulted in {number}...')
    print(f'Pay {number}')
elif number == 37:
    print('The spin resulted in 00')
    print('Pay 00')

# pay black or red
black = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]

if number in black:
    black_or_red = 'Pay Black'
elif number in red:
    black_or_red = 'Pay Red'

# pay ever or odd
if number > 0:
    if number % 2 == 0:
        even_or_odd = 'Pay Even'
    elif number % 2 != 0:
        even_or_odd = 'Pay Odd'

# pay 1 to 18 or 19 to 36
if 1 <= number <= 18:
    pay_versus = 'Pay 1 to 18'
elif 19 <= number <= 36:
    pay_versus = 'Pay 19 to 36'

if 1 <= number <= 36:
    print(f'The spin resulted in {number}...')
    print(f'Pay {number}')
    print(f'{black_or_red}')
    print(f'{even_or_odd}')
    print(f'{pay_versus}')