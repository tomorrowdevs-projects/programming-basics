#import math module
import math

# ask to user a year
year = int(input('Type a year: '))

# using the gived formula determinate wich day is the first of the year typed
first_day = (year + math.floor((year - 1) / 4) - math.floor(year - 1 / 100) + math.floor(year - 1) / 400) % 7

# if statement the convert the number gived by formula to the name of the day and print on screen
if first_day < 1: 
    print('Sunday')
elif first_day < 2:
    print('Monday')
elif first_day < 3:
    print('Tuesday')
elif first_day < 4:
    print('Wednesday')
elif first_day < 5:
    print('Thursday')
elif first_day < 6:
    print('Friday')
elif first_day < 7:
    print('Saturday')
else:
    print('error')
