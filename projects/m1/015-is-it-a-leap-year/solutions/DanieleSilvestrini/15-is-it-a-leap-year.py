year = int(input("insert year: "))

# if year % 400 == 0:
#     print('This is a leap year')
# elif year % 100 == 0:
#     print('This is not a leap year')
# elif year % 4 == 0:
#     print('This is a leap year')
# else:
#     print('This is not a leap year')

if year % 400 == 0 or year % 100 == 0 or year % 4 == 0:
    print('This is a leap year')
else:
    print('This is not a leap year')