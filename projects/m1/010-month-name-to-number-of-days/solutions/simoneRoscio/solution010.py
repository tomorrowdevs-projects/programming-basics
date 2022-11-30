# Write a program that read a month name AS a string and return the number of days in that month
# Display 28 or 29 for February

user_month = str.casefold(input('Hello USER, write a month name: '))

month31 = 'january', 'march', 'may', 'july', 'august', 'october', 'december'
month30 = 'april', 'june', 'september', 'november'
february = 'febraury'

if user_month in month31:
    print(f'{user_month.capitalize()} have 31 days')
elif user_month in month30:
    print(f'{user_month.capitalize()} have 30 days')
elif user_month in february:
    print(f'{user_month.capitalize()} have 28 or 29 days')
else:
    print(f'Are you sure that {user_month} is a month?')