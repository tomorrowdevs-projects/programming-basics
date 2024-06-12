year = int(input('Enter a year: '))


if year % 400 == 0:
    print(year, 'is a leap year!')
elif year % 100 == 0:
    print(year, "isn't a leap year!")
elif year % 4 == 0:
    print(year, 'is a leap year!')
else:
    print(year, "isn't a leap year!")