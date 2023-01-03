


from datetime import datetime

year = int(input("Please insert year: "))
month = int(input("Please insert month: "))
day = int(input("Please insert day: "))
gregorian_date = datetime(year,month,day)
ordinal_day = gregorian_date.toordinal()
print(f"Ordinal number of date {gregorian_date} is: {ordinal_day}")

