#import random module
import random

# use random function to get a number 
choice = random.choice(range(0,38))

# if statement that print on screen wich is number and the other cases that pay like a roulette
if choice % 2 == 0 and choice != 37 and choice != 0:
    number = choice
    color = 'pay black'
    odd_even ='pay even'
if choice % 2 != 0 and choice != 37:
    number = choice
    color = 'red'
    odd_even = 'odd'
if choice == 37:
    number = '00'
    color = 'green'
if choice == 0:
    number = choice
    color = 'green'
    
if choice <= 18 and choice > 0:
    range_payout = '1 to 18'
elif choice > 18 and choice < 37:
    range_payout = '19 to 36'

if number == 0 or number == '00':
    print('Pay ' + str(number) + '\n' + 'Pay ' + str(color))
else: 
    print('Pay ' + str(number) + '\n' +  'Pay ' + str(color) + '\n' + 'Pay ' + str(odd_even) + '\n' + 'Pay '+ str(range_payout))


