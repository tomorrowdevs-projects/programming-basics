def is_a_leap_year(year: int) -> bool:
    '''
    Return True if 'year' is a leap year, return False if not
    '''
    if (year % 400) == 0:
        return True
    elif (year % 100) == 0:
        return False
    elif (year % 4) == 0:
        return True
    else:
        return False
    

def days_in_a_month(month: int, year:int) -> int:
    '''
    Returns tha number of days in month 'month' of year 'year'
    '''

    days_per_month = [31,28,31,30,31,30,31,31,30,31,30,31]

    if month == 2:
        if is_a_leap_year(year):
            return 29
        else:
            return 28
    else: 
        return days_per_month[month-1]

if __name__=="__main__":

    month = int(input("Insert a month MM "))
    year = int(input("Insert a year YYYY "))

    print("The days in {}/{} are {}".format(year,month,days_in_a_month(month,year)))

