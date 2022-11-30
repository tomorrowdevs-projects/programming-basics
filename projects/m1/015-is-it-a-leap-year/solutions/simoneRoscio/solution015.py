"""
Most years have 365 days. 
However, the time required for the Earth to orbit the Sun is actually slightly more than that. As a result, an extra day, February 29, is included in some years to correct for this difference. 
Such years are referred to as leap years.
The rules for determining whether or not a year is a leap year follow:
• Any year that is divisible by 400 is a leap year.
• Of the remaining years, any year that is divisible by 100 is not a leap year. • Of the remaining years, any year that is divisible by 4 is a leap year.
• All other years are not leap years.
Write a program that reads a year from the user and displays a message indicating whether or not it is a leap year.
"""

user_year = int(input('Hello User enter a year: '))

if user_year % 400 == 0:
    print(f'{user_year} is divisible by 400 so it is a leap year')
elif user_year % 100 == 0:
    print(f'{user_year} is divisible by 100 so it is not a leap year')
elif user_year % 4 == 0:
    print(f'{user_year} is divisible by 4 so it is a leap year')
else:
    print(f'{user_year} is not a leap year')