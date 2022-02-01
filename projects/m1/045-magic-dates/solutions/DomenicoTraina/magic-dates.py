
def leap_year(year):
    if year%400 == 0 :                 return True
    elif year%100 != 0 and year%4==0 : return True
    else:                              return False

def magic (day,month,year):
    year=year%100  
    if year == day * month:
        print(f"{day}/{month}/{year+1900} is a magic date!")

for year in range(1900,2001):
    dayrange=1
    for month in range(1,13):
        if month in (11,4,6,9):
            dayrange==30
        if month==2:
            if leap_year(year):
                dayrange=29
            else: dayrange=28
        for day in range(1,dayrange+1):
            magic (day,month,year)

        






        




    
    
