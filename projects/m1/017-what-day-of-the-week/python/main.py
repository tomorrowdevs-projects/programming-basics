#import math module
import math

# ask to user a year
year = int(input('Type a year: '))

# using the gived formula determinate wich day is the first of the year typed
first_day = int((year + math.floor((year - 1) / 4) - math.floor(year - 1 / 100) + math.floor(year - 1) / 400) % 7)


# if statement the convert the number gived by formula to the name of the day and print on screen
if first_day == 0: 
    result = 'Sunday'
elif first_day == 1:
    result = 'Monday'
elif first_day == 2:
    result = 'Tuesday'
elif first_day == 3:
    result = 'Wednesday'
elif first_day == 4:
    result = 'Thursday'
elif first_day == 5:
    result = 'Friday'
elif first_day == 6:
    result = 'Saturday'
else:
    result = 'error'

print('First day of that year is: ' + str(result))
