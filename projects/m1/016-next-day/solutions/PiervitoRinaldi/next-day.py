day = int(input('Enter day: '))
month = int(input('Enter month: '))
year = int(input('Enter year: '))


if year % 400 == 0 or year % 4 == 0:

    if month == 12 and day == 31:
        print('1 - 1 -', year +1)
   
    elif month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12:
        if day >= 1 and day < 31:
            print(day +1, '-', month, '-', year)
        elif day == 31:
            print('1 -', month + 1, '-', year)
    
    elif month == 2:
        if day >= 1 and day < 29:
            print(day +1, '-', month, '-', year)
        elif day == 29:
            print('1 -', month + 1, '-', year)
    
    elif month == 4 or month == 6 or month == 9:
        if day >= 1 and day < 30:
            print(day +1, '-', month, '-', year)
        elif day == 31:
            print('1 -', month + 1, '-', year)

elif year % 400 != 0 or year % 4 != 0:

    if month == 12 and day == 31:
        print('1 - 1 -', year +1)
   
    elif month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12:
        if day >= 1 and day < 31:
            print(day +1, '-', month, '-', year)
        elif day == 31:
            print('1 -', month + 1, '-', year)
    
    elif month == 2:
        if day >= 1 and day < 28:
            print(day +1, '-', month, '-', year)
        elif day == 28:
            print('1 -', month + 1, '-', year)
    
    elif month == 4 or month == 6 or month == 9:
        if day >= 1 and day < 30:
            print(day +1, '-', month, '-', year)
        elif day == 31:
            print('1 -', month + 1, '-', year)