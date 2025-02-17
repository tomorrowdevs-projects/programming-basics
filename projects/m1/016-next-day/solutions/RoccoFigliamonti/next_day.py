"""# Next Day

Write a program that reads a date from the user and computes its immediate successor.
For example, if the user enters values that represent 2019-11-18 then your program should display a message
indicating that the day immediately after 2019-11-18 is 2019-11-19.
If the user enters values that represent 2019-11-30 then the program should indicate that the next day is 2019-12-01.
If the user enters values that represent 2019-12-31 then the program should indicate that the next day is 2020-01-01.
The date will be entered in numeric form with three separate input statements;
one for the year, one for the month, and one for the day.
Ensure that your program works correctly for leap years.

"""

#short version
"""
from datetime import date,timedelta
year = int(input("Please insert the year: "))
month = int(input("Please insert the month: "))
day = int(input("Please insert the day: "))

datestart = date(year,month,day)
nextdate = datestart + timedelta(days=1)
print(f"Next date is {nextdate}")
"""


#long version
month_30days = [4, 6, 9, 11]
month_31days = [1,3,5,7,8,10,12]

year = int(input("Please insert the year: "))
month = int(input("Please insert the month: "))
day = int(input("Please insert the day: "))

leapyear = False
if (year % 400 == 0 and year % 100 == 0) or (year % 4 == 0 and year % 100 !=0):
    leapyear = True

if (month in month_30days and day>30) or \
   (month == 2 and day==29 and leapyear == False) or \
   (month == 2 and day>29) or \
   month>12 or day>31:
    print("This is not a valid date")                              #invalid date

elif month == 12 and day == 31:                                    #year change
    print(f"Next date is {year+1}-01-01")
elif month in month_31days and day == 31 and not month == 12:      #31d month change
    print(f"Next date is {year}-{month+1:02d}-01")
elif month in month_30days and day == 30:                          #30d month change
    print(f"Next date is {year}-{month+1:02d}-01")

elif month == 2 and day==28 and leapyear == True:                  #february
    print(f"Next date is {year}-{month}-29")
elif month == 2 and day==28 and leapyear == False:
    print(f"Next date is {year}-{month+1:02d}-01")
elif month == 2 and day==29 and leapyear == True:
    print(f"Next date is {year}-{month+1:02d}-01")

else:
    print(f"Next date is {year}-{month}-{day+1:02d}")





