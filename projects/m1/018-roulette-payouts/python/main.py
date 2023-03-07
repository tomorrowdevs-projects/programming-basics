#import random module
import random

# use random function to get a number 
choice = random.choice(range(0,39))

# if statement that print on screen wich is number and the other cases that pay like a roulette
if choice % 2 == 0 and choice != 37 and choice != 0:
    print(f'pay {choice}')
    print('pay black')
    print('pay even')
elif choice % 2 != 0 and choice != 37:
    print(f'pay {choice}')
    print('pay red')
    print('pay odd')
elif choice == 37:
    print('pay 00')
    print('pay green')
elif choice == 0:
    print(f'pay {choice}')
    print('pay green')


if choice <= 18 and choice > 0:
    print('pay 1 to 18')
elif choice > 18 and choice < 37:
    print('pay 19 to 36')




