year = int(input("Enter the year: "))
month = int(input("Enter the month in number form (1,2,...,12): "))
day = int(input("Enter the day: "))

day30 = [4, 6, 9, 11]
day31 = [1, 3, 5, 7, 8, 10, 12]

#cases if the month has 30 days
if month in day30:
    if day == 30:
        month += 1
        day = 1
        print(("The next day is {}-{}-{}") .format(year,month,day))
    elif day != 30: 
        day += 1
        print(("The next day is {}-{}-{}") .format(year,month,day))

#cases if the month has 31 days
elif month in day31:
    if month == 12:
        if day == 31:
            year += 1
            month = 1
            day = 1
            print(("The next day is {}-{}-{}") .format(year,month,day))
        elif day != 31:     
            day += 1
            print(("The next day is {}-{}-{}") .format(year,month,day))
    elif month != 12:
        if day == 31:
            month += 1
            day = 1
            print(("The next day is {}-{}-{}") .format(year,month,day))
        elif day != 31:
            day += 1
            print(("The next day is {}-{}-{}") .format(year,month,day))

#cases if the month is february with leap year
elif month == 2:
    if year % 100 != 0 and year % 4 == 0:
        if day == 29:
            month += 1
            day = 1
            print(("The next day is {}-{}-{}") .format(year,month,day))
        elif day != 29:
            day += 1
            print(("The next day is {}-{}-{}") .format(year,month,day))

    elif year % 400 == 0:
        if day == 29:
            month += 1
            day = 1
            print(("The next day is {}-{}-{}") .format(year,month,day))
        elif day != 29:
            day += 1
            print(("The next day is {}-{}-{}") .format(year,month,day))

    else:
        if day == 28:
            month += 1
            day = 1
            print(("The next day is {}-{}-{}") .format(year,month,day))
        elif day != 28:
            day += 1
            print(("The next day is {}-{}-{}") .format(year,month,day))












    
