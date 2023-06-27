#this program reads a date from the user and computes the next one
year = int(input("Enter the year: "))
month = int(input("Enter the month: "))
day = int(input("Enter the day: "))
next_year, next_month, next_day = year, month, day

def leap_year (year):
    if year % 100 == 0:
        if year % 400 == 0: return (True)
        else: return (False)
    elif year % 4 == 0: return (True)
    else: return (False)

if month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12:
    if day == 31:
        if month == 12:
            next_day = next_month = 1
            next_year += 1
        else:
            next_day = 1
            next_month += 1
    else: 
        next_day += 1
if month == 4 or month == 6 or month == 9 or month == 11:
    if day == 30:
        next_day = 1
        next_month += 1
    else: next_day += 1
if month == 2:
    if day == 29:
        next_day = 1
        next_month += 1
    if day == 28:
        if leap_year(year) == True:
            next_day += 1
        else: 
            next_day = 1
            next_month += 1
    else: next_day += 1

print("Day Entered: {}-{:02}-{:02}   Next day: {}-{:02}-{:02}".format(year, month, day, next_year, next_month, next_day))