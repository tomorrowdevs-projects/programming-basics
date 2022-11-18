def leapYear(YYYY):
    if YYYY % 400 == 0:
        day_in_month[1] = day_in_month[1] + 1
    elif YYYY % 100 == 0:
        pass
    elif YYYY % 4 == 0:
        day_in_month[1] = day_in_month[1] + 1

day_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
ordinal_days = []

def ordinalDate(DD, MM, YYYY):
    
    leapYear(YYYY)
    MM = MM - 2

    while MM > -1:
        ordinal_days.append(day_in_month[MM])
        MM = MM - 1
        
    ordinal_days.append(DD)
    print(sum(ordinal_days))

if __name__ == '__main__':
    DD = int(input('Enter a day: '))
    MM = int(input('Enter a month: '))
    YYYY = int(input('Enter a year: '))
    
    ordinalDate(DD, MM, YYYY)