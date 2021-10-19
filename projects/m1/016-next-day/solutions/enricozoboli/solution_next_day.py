year = int(input("Insert the year: "))
month = int(input("Insert the month: "))
day = int(input("Insert the day: "))

next_year = year
next_month = month
next_day = day

if month == 2:
    if(
        (year % 400 == 0 or (year % 100 != 0 and year % 4 == 0))
        and day == 28
    ):
        next_day += 1

    elif day == 29 or day == 28:
        next_day = 1
        next_month += 1
    else:
        next_day += 1

elif (
    month == 1 or month == 3 or month == 5 or 7 <= month <= 8
    or month == 10
):
    if day == 31:
        next_day = 1
        next_month += 1
    else :
        next_day += 1

elif month == 12:
    if day == 31:
        next_day = 1
        next_month = 1
        next_year += 1
    else:
        next_day += 1

elif month == 4 or month == 6 or month == 9 or month == 11:
    if day == 30:
        next_day = 1
        next_month +=1
    else:
        next_day += 1
    

print(f"{next_year}-{next_month}-{next_day}")



