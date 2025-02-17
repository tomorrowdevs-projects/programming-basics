def is_leap_year(year):
    return year % 100 != 0 and (year % 400 == 0 or year % 4 == 0)


def compute_next_day(year, month, day):
    days_in_month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    if is_leap_year(year): 
        days_in_month[2] = 29

    if day < days_in_month[month]:
        return year, month, day + 1
    elif month < 12:
        return year, month + 1, 1
    else:
        return year + 1, 1, 1


year = int(input("Enter the year: "))
month = int(input("Enter the month: "))
day = int(input("Enter the day: "))

next_year, next_month, next_day = compute_next_day(year, month, day)

print("Next day is {}-{:02d}-{:02d}".format(next_year, next_month, next_day))