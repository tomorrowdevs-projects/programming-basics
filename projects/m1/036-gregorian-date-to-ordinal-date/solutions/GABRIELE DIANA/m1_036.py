# Gregorian Date to Ordinal Date

'''An ordinal date consists of a year and a day within it, both of which are integers. 
The year can be any year in the Gregorian calendar while the day within the year ranges from one, which represents January 1, through to 365 (or 366 if the year is a leap year) which represents December 31. 
Ordinal dates are convenient when computing differences between dates that are a specific number of days (rather than months. 
For example, ordinal dates can be used to easily determine whether a customer is within a 90 day return period, the sell-by date for a food-product based on its production date, and the due date for a baby.

Write a function named ordinalDate that takes three integers as parameters.

These parameters will be a day, month and year respectively. 
The function should return the day within the year for that date as its only result. Create a main program that reads a day, month and year from the user and displays the day within the year for that date. Your main program should only run when your file has not been imported into another program.

# Documentation

For this project solution you may use:

- Functions
- Iterations
- Conditionals and recursion

# Deadline

This project requires to be completed in a maximum of **2 hours**'''

def isleap(year):
    year1 = year % 400
    year2 = year % 100
    year3 = year % 4

    if year1 == 0:
        return True
    elif year1 != 0 and year2 == 0:
        return False
    elif year1 != 0 and year2 != 0 and year3 == 0:
        return True
    else:
        return False

def past_months(day, month, year):
    tot_days = {
        1: 0,
        2: 31,
        3: 59,
        4: 90,
        5: 120,
        6: 151,
        7: 181,
        8: 212,
        9: 243,
        10: 273,
        11: 304,
        12: 334
    }
    output = tot_days[month] + day
    isleap_year = isleap(year)
    if isleap_year and month > 2:
        output += 1
    return output

def main():
    past_months()

if __name__ == "__main__":
    main()

