#exercise m1/016-next-day by Francesco Ricci
#non prevede controlli se vengono inseriti valori di day e mounth errati

def getFebruaryLastDay(anno):
    return 29 if (anno % 400 == 0) or (anno % 4 == 0 and (not(anno % 100 == 0))) else 28

def nextMounth(mounth):
    #function service by getNextDay
    if mounth == 12:
        return 1
    else:
        return  mounth +1

def nextYear(year):
    #function service by getNextDay
    return year + 1

def isLastDayYear(day,mounth):
    return True if (day == 31) and (mounth == 12) else False

def isLastDayMounth(day,mounth,year):
    #gli serve isLeapYear per determinare il giorno successivo dell'ultimo giorno di febbraio'

    february_last_day = getFebruaryLastDay(year)
    mounth_30 = 30
    mounth_31 = 31

    if mounth == 1:
        ret = True if day == mounth_31 else False
    elif mounth == 2:
        ret = True if day == february_last_day else False
    elif mounth == 3:
        ret = True if day == mounth_31 else False
    elif mounth == 4:
        ret = True if day == mounth_30 else False
    elif mounth == 5:
        ret = True if day == mounth_31 else False
    elif mounth == 6:
        ret = True if day == mounth_30 else False
    elif mounth == 7:
        ret = True if day == mounth_31 else False
    elif mounth == 8:
        ret = True if day == mounth_31 else False
    elif mounth == 9:
        ret = True if day == mounth_30 else False
    elif mounth == 10:
        ret = True if day == mounth_31 else False
    elif mounth == 11:
        ret = True if day == mounth_30 else False
    elif mounth == 12:
        ret = True if day == mounth_31 else False
    else:
        return(0)

    return ret


# template presentation and hard code
year = 2022
mounth = 1
day = 11

year = int(input('The year current is: '))
mounth = int(input('The mounth current is: '))
day = int(input('The day current is: '))

user_input = str(year) + '/' + str(mounth).zfill(2) + '/' + str(day).zfill(2)
print('The day current is: ' + user_input)

#passiama la stringa current_day senza nessun controllo
def getNextDay(day,mounth,year):
    if isLastDayMounth(day,mounth,year):
        if isLastDayYear(day,mounth):
            return (str(year+1) + '/' + str(1).zfill(2) + '/' + str(1).zfill(2))
        else:
            return (str(year) + '/' + str(mounth + 1).zfill(2) + '/' + str(1).zfill(2))
    else:
        return (str(year) + '/' + str(mounth).zfill(2) + '/' + str(day+1).zfill(2))


print('The next day    is: '+ getNextDay(day,mounth,year))
print('\n')
# print(nextYear(2022))
# print(nextMounth(13))
# print(isLastDayMounth(day,mounth,year))
# print(getFebruaryLastDay(2022))
