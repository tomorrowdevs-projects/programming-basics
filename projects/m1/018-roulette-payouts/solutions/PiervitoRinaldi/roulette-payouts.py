import random 

red_number = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
black_number = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 31, 33, 35]

number = random.randint(0, 36)
if number == 0:
    number = random.choice(['%02i' %(0) , 0])

print('The spin resulted in', number, '...')
if number == 0:
    print('Pay 0')
elif number == '00':
    print('Pay 00')

if number in red_number:
    print('Pay red')
elif number in black_number: 
    print('Pay black')

if number % 2 == 0:
    print('Pay Even')
else:
    print('Pay Odd')

if number >= 1 and number <=18:
    print('Pay 1to 18')
else:
    print('Pay 19 to 36')
