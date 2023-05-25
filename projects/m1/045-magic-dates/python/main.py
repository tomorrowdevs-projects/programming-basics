def magic_date(day:int,month:int,year:int)->bool:
    year = str(year)[2:4]
    if day*month == int(year):
        return True
    else:
        return False
    
import days_in_a_month

month_name= ["January","February","March","April","May","June","July","August","September","October","November","December"]
    
for year in range (1901,2000):
    for month in range(1,12):
        for day in range(1,days_in_a_month.days_in_a_month(month,year)):
            if magic_date(day,month,year):
                print (day,month_name[month-1],year)