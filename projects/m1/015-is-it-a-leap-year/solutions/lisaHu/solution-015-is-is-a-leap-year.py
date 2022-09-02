#Most years have 365 days. 
#However, the time required for the Earth to orbit the Sun is actually slightly more than that. As a result, an extra day, February 29, is included in some years to correct for this difference. 
#Such years are referred to as leap years.
#The rules for determining whether or not a year is a leap year follow:
#• Any year that is divisible by 400 is a leap year.
#• Of the remaining years, any year that is divisible by 100 is not a leap year. • Of the remaining years, any year that is divisible by 4 is a leap year.
#• All other years are not leap years.
# a program that reads a year from the user and displays a message indicating whether or not it is a leap year.


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