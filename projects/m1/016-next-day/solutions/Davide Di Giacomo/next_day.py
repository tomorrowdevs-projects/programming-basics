february = 2
months_30 = [4, 6, 9, 11]
months_31 = [1, 3, 5, 7, 8, 10, 12]
year_leap = 29

#insert a date
date = input("Enter a date in YYYY-MM-DD format: ")
year, month, day = map(int, date.split('-'))

#year
if month == 12 and day == 31:
    year+=1
    month = 1
    day = 1

#leap year or not
elif year % 400 == 0 and month == february and day == 28:
    day = year_leap
    
elif year % 100 == 0 and month == february and day == 28:
    month+=1
    day = 1
    
elif year % 4 == 0 and month == february and day == 28:
    day = year_leap
    
#28/30/31 day for month
elif month == february and day == 28 or day == year_leap:
    month +=1
    day = 1
    
elif month in months_30 and day == 30:
    month +=1
    day = 1
    
elif month in months_31 and day == 31:
    month +=1
    day = 1
    
else:
    day+=1

print (str(year) + "-" + str(month).zfill(2) + "-" + str(day).zfill(2))