# I made sure that if 37 comes out it's considered as 00

# Import generator of random number from 0 to 37
import random
num = random.randint(0, 37)

# Define red and black number
red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
black = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]

# Print the various output
if num == 37:
    print('The spin resulted in 00...')
    print('Pay 00')
    quit()
else:
    print('The spin resulted in ' + str(num) + '...')
    print('Pay ' + str(num))  

# Pay colour
if num in red:
    print('Pay Red')
elif num in black:
    print('Pay Black')

# Pay odd or even
if num % 2 == 0 and num != 0:
    print('Pay Even')
elif num % 2 != 0 and num != 37:
    print('Pay Odd')

# Pay less than 18 or more than 19
if 1 <= num <= 18:
    print('Pay 1 to 18')
elif num > 18:
    print('Pay 19 to 36')    


    

