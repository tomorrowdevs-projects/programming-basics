def leap_year(yyyy):
    if yyyy % 400 == 0:
        day_in_month[1] = day_in_month[1] + 1
    elif yyyy % 100 == 0:
        pass
    elif yyyy % 4 == 0:
        day_in_month[1] = day_in_month[1] + 1

day_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
ordinal_days = []

def ordinalDate(dd, mm, yyyy):
    
    leap_year(yyyy)
    mm = mm - 2

    while mm > -1:
        ordinal_days.append(day_in_month[mm])
        mm = mm - 1
        
    ordinal_days.append(dd)
    print(sum(ordinal_days))

if __name__ == '__main__':
    dd = int(input('Enter a day: '))
    mm = int(input('Enter a month: '))
    yyyy = int(input('Enter a year: '))
    
    ordinalDate(dd, mm, yyyy)