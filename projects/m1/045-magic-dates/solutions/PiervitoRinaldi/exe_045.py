def magic_date(day, month, year):
    year = str(year)
    magic = day * month
    if magic == int(year[2:]):
        date = str('%02i' %(day)) + '/' + str('%02i' %(month)) + '/' + str(year)
        print(date)


def days_month_not_leap_y(month): 
    if month == 1 or month == 3 or month == 5 or month == 7 or\
        month == 8 or month == 10 or month == 12:
        days = 31
    elif month == 4 or month == 6 or month == 9 or month == 11:
        days = 30
    elif month == 2:
        days = 28
    return days

def days_month_leap_y(month):
    if month == 1 or month == 3 or month == 5 or month == 7 or\
        month == 8 or month == 10 or month == 12:
        days = 31
    elif month == 4 or month == 6 or month == 9 or month == 11:
        days = 30
    elif month == 2:
        days = 29
    return days

def is_a_leap_year(year):
    year = int(year)
    if year % 400 == 0 or year % 4 == 0:
        return True
    elif year % 100 == 0 or year % 4 == 0:
        return False
    else:
        return False

def magic():
    for year in range(1900, 2000):
            for month in range(1, 12):
                if is_a_leap_year(year) == True:
                    for day in range(1, days_month_leap_y(month)):
                            magic_date(day, month, year)
                elif is_a_leap_year(year) == False:
                    for day in range(1, days_month_not_leap_y(month)):
                            magic_date(day, month, year)

print(magic())