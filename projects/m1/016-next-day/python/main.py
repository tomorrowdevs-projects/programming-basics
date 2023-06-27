def it_is_leap_year(year):
    return year % 100 != 0 and (year % 400 == 0 or year % 4 == 0)

def input_user_next_day(year, month, day):
    twelve_month_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if it_is_leap_year(year): 
        twelve_month_days[2] = 29

    if day < twelve_month_days[month]:
        return year, month, day + 1
    elif month < 12:
        return year, month + 1, 1
    else:
        return year + 1, 1, 1

year = int(input("Hello please type the year: "))
month = int(input("Type the month: "))
day = int(input("Type the day: "))

next_year, next_month, next_day = input_user_next_day(year, month, day)

print("Next day is {}-{:02d}-{:02d}".format(next_year, next_month, next_day))