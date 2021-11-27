# input user seconds
secondUser=int(input('Enter number of second '))
# seconds in a day,hour and minute
secDay=86400
secHour=3600
secMinut=60
# i turn seconds in days,hours,minutes
secDayTot=int(secondUser/secDay)
secRemaining=secondUser-secDay*secDayTot
secHourTot=int(secRemaining/secHour)
secRemaining1=secRemaining-secHour*secHourTot
secMinutTotal=int(secRemaining1/secMinut)
secRemaining2=secRemaining1-secMinut*secMinutTotal
# output days,hour,minutes,second
print(secDayTot,' days')
print(f'{secHourTot:02d}','hours')
print(f'{secMinutTotal:02d}','minutes')
print(f'{secRemaining2:02d}','seconds')