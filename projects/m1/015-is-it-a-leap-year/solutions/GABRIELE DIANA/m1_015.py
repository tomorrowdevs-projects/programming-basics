# Is It a Leap Year?

# Most years have 365 days. 
# However, the time required for the Earth to orbit the Sun is actually slightly more than that. 
# As a result, an extra day, February 29, is included in some years to correct for this difference. 
# Such years are referred to as leap years.
# The rules for determining whether or not a year is a leap year follow:
# • Any year that is divisible by 400 is a leap year.
# • Of the remaining years, any year that is divisible by 100 is not a leap year. 
# • Of the remaining years, any year that is divisible by 4 is a leap year.
# • All other years are not leap years.
# Write a program that reads a year from the user and displays a message indicating whether or not it is a leap year.


# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **2 hours**

# I proceed to set the variable year as user input
year = int(input("Insert the year you want to check whether it's leap or not: "))

# I create a function that returns wheter the input is a leap year or not depending on the ipothesis conditions.
def result(year):
    year1 = year % 400
    year2 = year % 100
    year3 = year % 4

    if year1 == 0:
        return str(" is a leap year")
    elif year1 != 0 and year2 == 0:
        return str(" is not a leap year")
    elif year1 != 0 and year2 != 0 and year3 == 0:
        return str(" is a leap year")
    else:
        return str(" is not a leap year")


print("The year " + str(year) + result(year))