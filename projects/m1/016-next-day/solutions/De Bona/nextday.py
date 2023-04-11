# program  reads a date from the user and computes its immediate successor
print("enter a date you will know the next day")
year=int(input("enter a year: "))
if year % 400==0:
  leap_year=True
elif year %100==1:
    leap_year = False
elif year % 4==0:
    leap_year = True
else:
    leap_year = False
month= int(input("enter a month: "))
if month in (1, 3, 5, 7, 8, 10, 12):
    month_length=31
elif month in (4, 6, 9,11):
    month_length=30
elif month==2:
    if leap_year:
        month_length=29
    else:
        month_lenght =28
day=int (input("enter a day"))
if day < month_length:
 day+=1
else:
    day=1
    if month==12:
       year+=1
       month=1
    else:
        month+=1
print ("The next day is: ", year, month, day)
