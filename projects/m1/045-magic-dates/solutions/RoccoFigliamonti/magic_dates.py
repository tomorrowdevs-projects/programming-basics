"""# Magic Dates
A magic date is a date where the day multiplied by the month is equal to the two digit year. 
For example, June 10, 1960 is a magic date because June is the sixth month, and 6 times 10 is 60, which is equal to the two digit year. 
Write a function that determines whether or not a date is a magic date. 
Use your function to create a main program that finds and displays all of the magic dates in the 20th century.
"""


def is_magic_date (day,month,year):
    year = str(year)
    if day*month == int(year[-2:]):
        return True
#print(is_magic_date(10,6,60))

def is_leap_year(year):
    if year % 400 == 0 or (year % 100 != 0 and year % 4 == 0):
        return True

def days_in_month(month, year):
    month31 = (1,3,5,7,8,10,12)
    month30 = (4,6,9,11)
    if month in month30:
        days = 30
    elif month in month31:
        days = 31
    elif month == 2:
        if is_leap_year(year):
            days = 29
        else:
            days = 28
    else:
        mex = "invalide date"
        return mex
    return days
#print(days_in_month(2,2020))
#print(days_in_month(2,2021))
#print(days_in_month(6,2020))
#print(days_in_month(13,2020))

for year in range(1900,2001):
    for month in range(1,13):
        for days in range(1,days_in_month(month,year)):
            if is_magic_date(days,month,year):
                print(f"{days}-{month}-{year} is a magic date")