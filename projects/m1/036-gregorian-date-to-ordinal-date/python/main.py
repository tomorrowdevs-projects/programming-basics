def is_a_leap_year(year):
    if (year % 400) == 0:
        return True
    elif (year % 100) == 0:
        return False
    elif (year % 4) == 0:
        return True
    else:
        return False


def ordinalDate(day,month,year):
    if (day>28 and month == 2 and not is_a_leap_year(year)) or (day>29 and month == 2 and is_a_leap_year(year)) or \
     (day>30 and (month==11 or month == 4 or month == 6 or month == 9)) or (day>31 and (month== 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12)):
        return 0
    else:
        ordinal_day = day
        month -= 1
        while month > 0:
            if month == 11 or month == 4 or month == 6 or month == 9:
                ordinal_day +=30
            elif month == 2:
                if is_a_leap_year(year):
                    ordinal_day += 29
                else:
                    ordinal_day += 28
            else:
                ordinal_day += 31
            month -= 1
        return str(year)+"/"+str(ordinal_day)       


day = int(input("Insert day"))
month = int(input("Insert month"))
year =  int(input("Insert year"))       

ordinal_day = ordinalDate(day,month,year)
if ordinal_day == 0:
    print("This day doesn't exist in this year")
else:
    print(ordinal_day)

    


