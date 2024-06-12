# What Day of the Week

# The following formula can be used to determine the day of the week for January 1 in a given year:

# day_of_the_week = (year + floor((year − 1) / 4) − floor((year − 1) / 100) + floor((year − 1) / 400)) % 7

# The result calculated by this formula is an integer that represents the day of the week. 
# Sunday is represented by 0. 
# The remaining days of the week following in sequence through to Saturday, which is represented by 6.

# Use the formula above to write a program that reads a year from the user and reports the day of the week for January 1 of that year. 
# The output from your program should include the full name of the day of the week, not just the integer returned by the formula.


# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **2 hours**
from math import floor

year = int(input("Insert year: "))
year_f = year - 1
day = str((year + floor(year_f / 4) - floor(year_f / 100) + floor(year_f / 400)) % 7)
day_name = {
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday"
}

print(day_name.get(day))
