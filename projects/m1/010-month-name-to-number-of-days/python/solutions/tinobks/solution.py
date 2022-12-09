days30 = ("april","june","september","november")
february = "february"

month = str.lower(input("Enter a month and this program will tell you how many days are in it: "))

if month in days30:
    print("30 days")

elif month == february:
    print("28 or 29 days")

else: print("31 days")