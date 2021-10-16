# An ordinal date consists of a year and a day within it, both of which are integers.
# The year can be any year in the Gregorian calendar while the day within the year ranges from one,
# which represents January 1, through to 365 (or 366 if the year is a leap year) which represents December 31.
# Ordinal dates are convenient when computing differences between dates that are a specific number of days
# (rather than months. For example, ordinal dates can be used to easily determine whether a customer is within
# a 90 day return period, the sell-by date for a food-product based on its production date, and the due date for a baby.

# Write a function named ordinalDate that takes three integers as parameters.

# These parameters will be a day, month and year respectively.
# The function should return the day within the year for that date as its only result.
# Create a main program that reads a day, month and year from the user and displays the day within the year for that date.
# Your main program should only run when your file has not been imported into another program.

print("\nEnter the day")
day_int = int(input())
print("\nEnter the month")
month_int = int(input())
print("\nEnter the year")
year_int = int(input())

def ordinalDate(day, month, year):
    if month == 1:
        ordinal_date = day
    elif month == 2:
        ordinal_date = 31 + day
    elif month == 3:
        if year % 400 == 0:
            ordinal_date = 31 + 29 + day
        elif year % 100 == 0 and year % 400 != 0:
            ordinal_date = 31 + 28 + day
        elif year % 4 == 0 and year % 400 != 0 and year % 100 != 0 and month != 2:
            ordinal_date = 31 + 29 + day
        else:
            ordinal_date = 31 + 28 + day
    elif month == 4:
        if year % 400 == 0:
            ordinal_date = 31 + 29 + 31 + day
        elif year % 100 == 0 and year % 400 != 0:
            ordinal_date = 31 + 28 + 31 + day
        elif year % 4 == 0 and year % 400 != 0 and year % 100 != 0 and month != 2:
            ordinal_date = 31 + 29 + 31 + day
        else:
            ordinal_date = 31 + 28 + 31 + day
    elif month == 5:
        if year % 400 == 0:
            ordinal_date = 31 + 29 + 31 + 30 + day
        elif year % 100 == 0 and year % 400 != 0:
            ordinal_date = 31 + 28 + 31 + 30 + day
        elif year % 4 == 0 and year % 400 != 0 and year % 100 != 0 and month != 2:
            ordinal_date = 31 + 29 + 31 + 30 + day
        else:
            ordinal_date = 31 + 28 + 31 + 30 + day
    elif month == 6:
        if year % 400 == 0:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + day
        elif year % 100 == 0 and year % 400 != 0:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + day
        elif year % 4 == 0 and year % 400 != 0 and year % 100 != 0 and month != 2:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + day
        else:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + day
    elif month == 7:
        if year % 400 == 0:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + day
        elif year % 100 == 0 and year % 400 != 0:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + day
        elif year % 4 == 0 and year % 400 != 0 and year % 100 != 0 and month != 2:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + day
        else:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + day
    elif month == 8:
        if year % 400 == 0:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + 31 + day
        elif year % 100 == 0 and year % 400 != 0:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + 31 + day
        elif year % 4 == 0 and year % 400 != 0 and year % 100 != 0 and month != 2:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + 31 + day
        else:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + 31 + day
    elif month == 9:
        if year % 400 == 0:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + day
        elif year % 100 == 0 and year % 400 != 0:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + day
        elif year % 4 == 0 and year % 400 != 0 and year % 100 != 0 and month != 2:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + day
        else:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + day
    elif month == 10:
        if year % 400 == 0:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + day
        elif year % 100 == 0 and year % 400 != 0:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + day
        elif year % 4 == 0 and year % 400 != 0 and year % 100 != 0 and month != 2:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + day
        else:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + day
    elif month == 11:
        if year % 400 == 0:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + day
        elif year % 100 == 0 and year % 400 != 0:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + day
        elif year % 4 == 0 and year % 400 != 0 and year % 100 != 0 and month != 2:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + day
        else:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + day
    elif month == 12:
        if year % 400 == 0:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + day
        elif year % 100 == 0 and year % 400 != 0:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + day
        elif year % 4 == 0 and year % 400 != 0 and year % 100 != 0 and month != 2:
            ordinal_date = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + day
        else:
            ordinal_date = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + day
    return print("\nThe ordinal date is: " + str(ordinal_date) + " " +  str(year))

ordinalDate(day_int, month_int, year_int)