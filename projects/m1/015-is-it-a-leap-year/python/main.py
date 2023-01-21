# ask to user a year
year = int(input("insert year: "))

# determinate if the year typed by user is a leap year and print a string with result
if year % 400 == 0 or year % 100 == 0 or year % 4 == 0:
    print('This is a leap year')
else:
    print('This is not a leap year')
