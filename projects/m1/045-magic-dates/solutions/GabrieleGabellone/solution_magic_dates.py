# This function takes a year as a parameter, returns true if the year is a leap year, false if it is not
def leap_year(year):
    if year % 100 == 0 and year % 400 == 0: return True
    elif year % 4 == 0: return(True)
    else: return(False)

# This function takes a month and a year and returns the number of days in that month
def days_in_a_month(month, year):
    days_for_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if leap_year(year) == True: 
        days_for_month[1] = 29
    return days_for_month[month-1]

# This function takes day, month and year as parameters and return true if the date is magic.
# A magic date is a date where the day multiplied by the month is equal to the two digit year.
def magic_dates(day, month, year):
    year = str(year)[2:]
    if int(year) == day * month: return(True)
    else: return(False)

# Main program that finds and displays all magical dates of the 20th century.
def main():
    for year in range(1901, 2001):
        for month in range(1, 13):
            last_day_of_month = days_in_a_month(month, year)
            for day in range(1, last_day_of_month + 1):
                if magic_dates(day, month, year) == True:
                    print ("{}/{}/{} is a magic date.".format(day, month, year))

if __name__ == "__main__":
    main()