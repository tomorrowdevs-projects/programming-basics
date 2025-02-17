day = int(input('Day: '))
month = int(input('Month: '))
year = int(input('Year: '))

def ordinalDate(day, month, year):
    i = 1 
    while True:
        if month >= 1 and i == 1: # I added an index to avoid repeating the seem instruction
            o_date = day
            prev_days = 31 # Every time the loop is repeated, this variable is updating
            i += 1
            continue
        elif month >= 2 and i == 2:
            if year % 400 == 0:
                o_date = prev_days + day
                prev_days += 29
                i += 1
                continue
            elif year % 100 == 0:
                o_date = prev_days + day
                prev_days += 28
                i += 1
                continue
            elif year % 4 == 0:
                o_date = prev_days + day
                prev_days += 29
                i += 1
                continue
            else:
                o_date = prev_days + day
                prev_days += 28
                i += 1
                continue
        elif month >= 3 and i == 3:
            o_date = prev_days + day
            prev_days += 31
            i += 1
            continue
        elif month >= 4 and i == 4:
            o_date = prev_days + day
            prev_days += 30
            i += 1
            continue
        elif month >= 5 and i == 5:
            o_date = prev_days +day
            prev_days += 31
            i += 1
            continue
        elif month >= 6 and i == 6:
            o_date = prev_days + day
            prev_days += 30
            i += 1
            continue
        elif month >= 7 and i == 7:
            o_date = prev_days + day
            prev_days += 31
            i += 1
            continue
        elif month >= 8 and i == 8:
            o_date = prev_days + day
            prev_days += 31
            i += 1
            continue
        elif month >= 9 and i == 9:
            o_date = prev_days + day
            prev_days += 30
            i += 1
            continue
        elif month >= 10 and i == 10:
            o_date = prev_days + day
            prev_days += 31
            i += 1
            continue
        elif month >= 11 and i == 11:
            o_date = prev_days +day
            prev_days += 30
            i += 1
            continue
        elif month >= 12 and i == 12:
            o_date = prev_days + day
        break
    print(o_date)

ordinalDate(day, month, year)
