# Next Day

# Write a program that reads a date from the user and computes its immediate successor. 
# For example, if the user enters values that represent 2019-11-18 then your program should display
# a message indicating that the day immediately after 2019-11-18 is 2019-11-19.
# If the user enters values that represent 2019-11-30 then the program should indicate that the next day is 2019-12-01. 
# If the user enters values that represent 2019-12-31 then the program should indicate that the next day is 2020-01-01. 
# The date will be entered in numeric form with three separate input statements;
# one for the year, one for the month, and one for the day.
# Ensure that your program works correctly for leap years.


# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **2 hours**

user_year = int(input("insert year: "))
user_month = int(input("insert month: "))
user_day = int(input("insert day: "))
DAYS_31 = (1, 3, 5, 7, 8, 10, 12)
DAYS_30 = (4, 6, 9, 11)
FEB = 2

def leap(user_year):
    year1 = user_year % 400
    year2 = user_year % 100
    year3 = user_year % 4

    if year1 == 0:
        return True
    elif year1 != 0 and year2 == 0:
        return False
    elif year1 != 0 and year2 != 0 and year3 == 0:
        return True
    else:
        return False

if user_month in DAYS_31:
    if user_day == 31 and user_month != 12:
        day = 1
        month = user_month + 1
        year = user_year
        print("{}-{}-{}".format(year, month, day))
    elif 1 <= user_day <= 30:
        day = user_day + 1
        month = user_month
        year = user_year
        print("{}-{}-{}".format(year, month, day))
    elif user_day == 31 and user_month == 12:
        day = 1
        month = 1
        year = user_year + 1
        print("{}-{}-{}".format(year, month, day))
    else:
        print("invalid date")

if user_month in DAYS_30:
    if user_day == 30:
        day = 1
        month = user_month + 1
        year = user_year
        print("{}-{}-{}".format(year, month, day))
    elif 1 <= user_day <= 29:
        day = user_day + 1
        month = user_month
        year = user_year
        print("{}-{}-{}".format(year, month, day))
    else:
        print("Invalid date")


if user_month == FEB:
    if leap(user_year) == False:
        if user_day == 28:
            day = 1
            month = user_month + 1
            year = user_year
            print("{}-{}-{}".format(year, month, day))
        elif 1 <= user_day <= 27:
            day = user_day + 1
            month = user_month
            year = user_year
            print("{}-{}-{}".format(year, month, day))
        else:
            print("Invalid date")
    elif leap(user_year) == True:
        if user_day == 29:
            day = 1
            month = user_month + 1
            year = user_year
            print("{}-{}-{}".format(year, month, day))
        elif 1 <= user_day <= 28:
            day = user_day + 1
            month = user_month
            year = user_year
            print("{}-{}-{}".format(year, month, day))
        else:
            print("Invalid date")
    else:
        print("Invalid date")

    if user_month < 1 or user_month > 12:
        print("Invalid date")

