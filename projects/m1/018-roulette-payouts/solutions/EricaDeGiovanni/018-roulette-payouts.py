import random

# random number generator
random_number = random.randint(0, 37) 
red_spaces = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]

if random_number == 37: random_number = '00'

# Display the number selected and all of the bets that must be payed.
if random_number == 0 or random_number == '00':
    print(f'Pay {random_number}')
else:
    print('```')
    print(f'The spin resulted in {random_number}...')
    print(f'Pay {random_number}')
    if random_number in red_spaces:
        print(f'Pay Red')
    else:
        print(f'Pay Black')
    if random_number % 2 == 0:
        print('Pay Even')
    else:
        print('Pay Odd')
    if 1 <= random_number <= 18:
        print('Pay 1 to 18')
    else:
        print('Pay 19 to 36')
    print('```')
    


