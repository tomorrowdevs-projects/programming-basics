month = input("insert month in this form: 'January','February' etc...\n")
if month == "February":
    print(month + " has 28 or 29 days")
elif month == "April" or month == "June" or month == "September" or month == "November":
    print(month + " has 30 days")
elif month == "January"  or month == "March" or month == "May" or month == "July" or month == "August" or month == "October" or month == "December":
    print(month + " has 31 days")
else:
    print("syntax error")