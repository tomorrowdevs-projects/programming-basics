"""
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
If the simulation results in 0 or 00 then your program should display
`Pay 0` or `Pay 00` without any further output.
"""
import random
scelta = str(random.randint(0,37))
if scelta =='0':
    print('Pay {0:2s}'.format(scelta))
elif scelta=='37':
    print('Pay 00')
else:
    if scelta=='1'or scelta=='3'or scelta=='5'or scelta=='7'or scelta=='9'or scelta=='12'or\
        scelta=='14' or scelta=='16'or scelta=='18'or scelta=='19'or scelta=='21'or \
        scelta=='23'or scelta=='25'or scelta=='27'or scelta=='30'or scelta=='32'or \
        scelta=='34'or scelta=='36':
        print('Pay {0:2s}'.format(scelta))
        print('Pay Red')
    else:
        print('Pay {0:2s}'.format(scelta))
        print('Pay Black')
    if (int(scelta)%2)==0:
        print('Pay Even')
    else:
        print('Pay Odd')
    if (int(scelta)<=18):
        print('Pay 1-18')
    else:
        print('Pay 19-36')