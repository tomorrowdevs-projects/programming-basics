'''
# Next Day

Write a program that **reads a date** from the user and **computes its immediate successor**.   
The date will be **entered in numeric form with three separate input statements**: 
- year   
- month
- day


Example:    
- if the user enters values that represent 2019-11-18 the next day is 2019-11-19.  
- If the user enters values that represent 2019-11-30 the next day is 2019-12-01. 
- If the user enters values that represent 2019-12-31 the next day is 2020-01-01. 


Ensure that your program **works correctly for leap years**.
'''

def check_leap_year(year):
    is_leap = False
    
    if year%400 == 0:
        is_leap = True
    elif year%100 == 0:
        is_leap = False
    elif year%4 == 0:
        is_leap = True
    else:
        is_leap = False

    return is_leap

def which_next(year, month, day):
    max_day = 0
    next_date = ""
    match month:
        case 1 | 3 | 5 | 7 | 8 | 10 | 12:
            max_day = 31
        case 2:
            if check_leap_year(year) == True:
                max_day = 29
            else:
                max_day = 28
        case 4 | 6 | 9 | 11:
            max_day = 30

    if day < max_day:
        day += 1
    elif day == max_day and month == 12:
        day = 1
        month = 1
        year += 1
    elif day >= max_day:
        day = 1
        month += 1

    next_date = f"{year:04}-{month:02}-{day:02}"
    
    return next_date


while True:
    try:
        year_from_user = int(input("\nInsert year:(int number) "))
        month_from_user = int(input("Insert month:(int number) "))
        day_from_user = int(input("Insert day:(int number) "))
    except ValueError:
        print("\nInput error, please try again..")
        continue

    print(which_next(year_from_user, month_from_user, day_from_user))
    break
