month_30days = ("november", "april", "june", "september")

user_month = input("Enter month to check: ")

if user_month in month_30days:
    print("{} is 30 days".format(user_month))

if user_month=="february":
    year=int(input("enter year please: "))
    if year%4==0 or year%400==0:
         print("february of year {} is leap!".format(year))
    else: 
        print("february of year {} is not leap!".format(year))

if user_month not in month_30days and user_month != "february":
    print("{} is 31 days".format(user_month))