month_30days = (11, 4, 6, 9)
year=int(input("Please enter the year: "))
month=int(input("Please enter the month (1-12): "))

def leapyear(year):
    if year%400 == 0 :        
        return True 
    elif year%100 != 0 and year%4==0 :
         return True
    else:    
         return False

def howmanydays(month, year):
    if month==2:
        if leapyear==True:
            days=29
        else:
            days=28
        
    if month in month_30days:
        days=30
    else:
        days=31
    print(f"In {month} month of year {year} there are {days} days")    

if 0<year<=12:
    howmanydays(month, year)
else:
    print("Error month is not correct!")

     
