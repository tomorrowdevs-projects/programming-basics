#The length of a month varies from 28 to 31 days. 
#In this exercise you will create a program that reads the name of a month from the user as a string. 
#Then your program should display the number of days in that month. Display “28 or 29 days” for February so
#that leap years are addressed.
month_31 = ('january', 'march', 'may', 'july', 'august', 'october', 'december')
month_30 = ('april', 'june', 'september', 'november')
month_f = ('february')
month = input('Please write your month here:')


if month in month_31:
    print("Your Month has 31 days.")

elif month in month_30:
    print("Your month has 30 days")

elif month in month_f:
    year = int(input('please write your year:'))
    if year % 4 == 0:
        print("February has 29 days")
    else:
        print("february has 28 days")