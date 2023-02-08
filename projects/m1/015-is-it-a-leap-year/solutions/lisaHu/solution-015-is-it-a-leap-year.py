year = int(input('Welcome to Leap Year Testing! Please enter the year:   '))

remainder400 = year % 400
remainder100 = year % 100
remainder4 = year % 4

print()

if remainder4 == 0 and remainder100 != 0:
    print(str(year) + ' IS a Leap Year!')
elif remainder400 == 0 and remainder100 != 0:
    print(str(year) + ' IS a Leap Year!')
elif remainder4 == 0 and remainder400 == 0:
    print(str(year) + ' IS a Leap Year!')
else:
    print(str(year) + ' is NOT a Leap Year!')

print()