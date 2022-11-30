"""# What Day of the Week

The following formula can be used to determine the day of the week for January 1 in a given year:

day_of_the_week = (year + floor((year − 1) / 4) − floor((year − 1) / 100) + floor((year − 1) / 400)) % 7

The result calculated by this formula is an integer that represents the day of the week. 
Sunday is represented by 0. 
The remaining days of the week following in sequence through to Saturday, which is represented by 6.

Use the formula above to write a program that reads a year from the user and reports the day of the week for January 1 of that year. 
The output from your program should include the full name of the day of the week, not just the integer returned by the formula."""

print('Hello USER this program will determine which day of the week is the first day of a given year')
year = int(input('Enter a year:'))

day_of_the_week = (year + ((year -1) // 4) - ((year - 1) // 100) + ((year - 1) // 400)) % 7


if day_of_the_week == 0:
    day_of_the_week = 'Sunday'
elif day_of_the_week == 1:
    day_of_the_week = 'Monday'
elif day_of_the_week == 2:
    day_of_the_week = 'Tuesday'
elif day_of_the_week == 3:
    day_of_the_week = 'Wednesday'
elif day_of_the_week == 4:
    day_of_the_week = 'Thursday'
elif day_of_the_week == 5:
    day_of_the_week = 'Friday'
elif day_of_the_week == 6:
    day_of_the_week = 'Saturday'

print(f'{year} start with {day_of_the_week}')