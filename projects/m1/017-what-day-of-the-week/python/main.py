#user enter a year 
year = int(input("Enter a year and I'll tell you the exact day of the 1st January: "))
import math
#floor function helps to round down to an integer a floating number
day = (year + math.floor((year - 1) / 4) - math.floor((year - 1) / 100) + math.floor((year - 1) / 400)) % 7

#0 = SUNDAY / 6 = SATURDAY
if day == 0:
    day = 'Sunday'
    print (day)
elif day == 1:
    day = 'Monday'
    print (day)
elif day == 2:
    day = 'Tuesday'
    print (day)
elif day == 3:
    day = 'Wensday'
    print (day)
elif day == 4:
    day = 'Thursday'
    print (day)
elif day == 5:
    day = 'Friday'
    print (day)
else:
    day = 'Saturday'
    print (day)