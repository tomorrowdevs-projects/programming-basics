import math

year = int(input('enter year:  '))

week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
day_of_the_week = (year + math.floor((year - 1) / 4) - math.floor((year - 1) / 100) + math.floor((year - 1) / 400)) % 7

day = week[day_of_the_week]
print('1st January of the ' + str(year) + ' is a ' + str(day))