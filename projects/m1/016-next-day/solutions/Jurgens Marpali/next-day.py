#Write a program that reads a date from the user and computes its immediate successor. 
#For example, if the user enters values that represent 2019-11-18 then your program should display a 
#message indicating that the day immediately after 2019-11-18 is 2019-11-19. 
#If the user enters values that represent 2019-11-30 then the program should indicate that the next day 
#is 2019-12-01. 
#If the user enters values that represent 2019-12-31 then the program should indicate that the next day 
#is 2020-01-01. 
#The date will be entered in numeric form with three separate input statements; one for the year, one for 
#the month, and one for the day. 
#Ensure that your program works correctly for leap years.
year = int(input('Please write the year: '))
month = int(input('Please Write the month: '))
day = int(input('Please write the day:'))

month_31 = [1,3,5,7,8,10]
month_30 = [4,6,9,11]
february = 2
december = 12
new_day = day
new_month = month
new_year = year
if month >12 and day >31:
    print("Error")
if month in month_31 and day == 31 or month in month_30 and day == 30:
    new_day = 1
    new_month = month + 1
elif month in month_31 and day <31 or month in month_30 and day <30:
    new_day = day + 1
    new_month = month
elif month == december and day ==31:
    new_day = 1
    new_month = 1
    new_year = year + 1
#def leap_year(new_day, month, year):
if month == february and day == 28:
    if year % 400 == 0 or year % 100 == 0 or year % 4 == 0:
            new_day = 29
    else:
        new_day = 1
        new_month = month + 1
    #return 
#i tried to use the function but it didn't work :/
print("The next date is: ", new_year, "/", new_month, "/", new_day)






