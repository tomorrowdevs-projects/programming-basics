#month name to number of days
#this program reads the name of a month entered by the user and displays the number of days in that month

month_user = str(input("Enter the name of a month: "))
month = month_user.lower()
month_31 = ["january", "march", "may", "july", "august", "october", "december"]
month_30 = ["april", "june", "september", "november"]

def find(set_of_months, month_entered):
    index = 0
    while index < len(set_of_months):
        if set_of_months[index] == month_entered:
            return(True)
        index += 1
    return (False)

if find(month_31, month) == True:
    print("This month is 31 days.")
elif find(month_30, month) == True:
    print("This month is 30 days.")
elif month == "february":
    print("This month is 28 days or 29 for leap years.")
else:
    print("Error! Month not recognized.")