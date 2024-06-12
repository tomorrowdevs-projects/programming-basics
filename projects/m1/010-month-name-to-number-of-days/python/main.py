month = str(input("Insert a month name "))
month = month.lower()
if month == "november" or  month == "april" or month == "june" or month == "september":
    print("This month has 30 days")
elif month == "february":
    print("This month has 28 or 29 days")
elif month == "january" or month == "march" or month == "may" or month == "july" or month == "august" or month == "october" or month == "december":
    print("This month has 31 days")
else:
    print("You haven't insert a name of a month")


