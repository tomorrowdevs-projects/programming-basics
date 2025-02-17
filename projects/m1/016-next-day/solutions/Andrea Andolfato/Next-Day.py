
year = int(input("Please enter a year"))
month = int(input("Please enter a month"))
day = int(input("Please enter a day"))

thirty_days_month = 4,6,9,11
thirtyone_days_month = 1,2,3,5,7,8,10,12

if month in thirty_days_month:
    if day < 30:
        print("Tomorrow is:", year,month,day+1)
    if day == 30:
        print("Tomorrow is:",year,month+1,1)

if month in thirtyone_days_month: 
    if day < 31:
        print("Tomorrow is:", year,month,day+1)
    if day == 31:
        print("Tomorrow is:",year,month+1,1)

if month == 12 and day == 31:
    print("Tomorrow is:",year+1,1,1)

if year % 400 == 0 and month == 2 and day == 28:
    print("This is a leap year and tomorrow is:",year,month+1,1)

