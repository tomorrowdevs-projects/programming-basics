month30=["april","june","september","november"]
month31=["january","march","may","july","august","october","december"]

month_name= input("Enter the name of a month: ")
if month_name=="february" :
    print("There are 28 or 29 days in this month.")
elif month_name in month30 :
    print("There are 30 days in this month.")
elif month_name in month31:
    print("There are 31 days in this month.")