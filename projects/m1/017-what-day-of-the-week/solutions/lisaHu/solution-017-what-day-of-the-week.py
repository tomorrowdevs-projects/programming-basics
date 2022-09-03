#The following formula can be used to determine the day of the week for January 1 in a given year:

#day_of_the_week = (year + floor((year − 1) / 4) − floor((year − 1) / 100) + floor((year − 1) / 400)) % 7

#The result calculated by this formula is an integer that represents the day of the week. 
#Sunday is represented by 0. 
#The remaining days of the week following in sequence through to Saturday, which is represented by 6.

#Use the formula above to write a program that reads a year from the user and reports the day of the week for January 1 of that year. 
#The output from your program should include the full name of the day of the week, not just the integer returned by the formula.


import math

year = int(input('enter year:  '))

week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
day_of_the_week = (year + math.floor((year - 1) / 4) - math.floor((year - 1) / 100) + math.floor((year - 1) / 400)) % 7

day = week[day_of_the_week]
print('1st January of the ' + str(year) + ' is a ' + str(day))