# I create two funtions: one to the days in a leap year and the other the opposit. 
# So, the third function identify the year (leap and not leap year) and return the result.

def days_month_not_leap_y(month): 
    if month == 1 or month == 3 or month == 5 or month == 7 or\
        month == 8 or month == 10 or month == 12:
        days = 31
    elif month == 4 or month == 6 or month == 9 or month == 11:
        days = 30
    elif month == 2:
        days = 28
    else:
        days = 'ERROR: Enter month (1-12)'
    return days

def days_month_leap_y(month):
    if month == 1 or month == 3 or month == 5 or month == 7 or\
        month == 8 or month == 10 or month == 12:
        days = 31
    elif month == 4 or month == 6 or month == 9 or month == 11:
        days = 30
    elif month == 2:
        days = 29
    else:
        days = 'ERROR: Enter month (1-12)'
    return days

def days_in_a_month(month, year):
    if year % 400 == 0:
        print(days_month_leap_y(month))
    elif year % 100 == 0:
        print(days_month_not_leap_y(month))
    elif year % 4 == 0:
        print(days_month_leap_y(month))
    else:
        print(days_month_not_leap_y(month))

def main():
    month = int(input('Enter month: '))
    year = int(input('Enter year: '))
    days_in_a_month(month, year)
