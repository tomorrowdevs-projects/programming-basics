user_year = int(input('Hello User enter a year: '))

if user_year % 400 == 0:
    print(f'{user_year} is divisible by 400 so it is a leap year')
elif user_year % 100 == 0:
    print(f'{user_year} is divisible by 100 so it is not a leap year')
elif user_year % 4 == 0:
    print(f'{user_year} is divisible by 4 so it is a leap year')
else:
    print(f'{user_year} is not a leap year')