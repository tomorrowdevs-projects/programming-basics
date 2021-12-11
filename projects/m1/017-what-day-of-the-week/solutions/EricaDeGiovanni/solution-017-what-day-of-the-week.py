import math

#read a year from the user
year_input = int(input('Insert the number of a year: '))
weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday']

day_of_the_week = (year_input + math.floor((year_input - 1) / 4) - math.floor((year_input - 1) / 100) +
                   math.floor((year_input - 1) / 400)) % 7

#return full name of the week day
print(f'The first weekday of that year is {weekdays[day_of_the_week]}.')
