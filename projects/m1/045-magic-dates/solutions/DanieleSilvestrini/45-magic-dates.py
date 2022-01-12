# defines a function where, passing a date as three parameter(day, month, and year) perform a computation and return if the last to digits of the year are equal to the result of the multiplication between day and month(magic dates).

def magic_dates(day, month, year):
    multiply = day * month
    year = str(year)
    if str(multiply) == year[2:4] or str(multiply) == year[3] and year[2] == '0':
        return True

# creates two list where store months in base on the length for the next step
months_30 = [4, 7, 9, 11]
months_31 = [1, 3, 5, 6, 8, 10, 12]

# creates a for loop that display magic dates in the whole 20 th century
for year in range(1900, 2001):
    if  year % 400 == 0 or year % 100 == 0 or year % 4 == 0:
        leap_year = True
    else:
        leap_year = False
    for month in range(1,13):
        if leap_year == True and month == 2:
            for day in range(1,30):
                if magic_dates(day, month, year):
                    print (day,'-', month,'-', year)
        if leap_year == False and month == 2:
            for day in range(1, 29):
                if magic_dates(day, month, year):
                    print (day,'-', month,'-', year)
        if month in months_30:
            for day in range(1, 31):
                if magic_dates(day, month, year):
                    print (day,'-', month,'-', year)
        if month in months_31:
            for day in range(1, 32):
                if magic_dates(day, month, year):
                    print (day,'-', month,'-', year)

    

