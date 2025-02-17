day = int(input("insert day\n"))
month = int(input("insert month\n"))
year = int(input("insert year\n"))
if day < 10 and month < 10:
    date = str(year) + "-" + "0" + str(month) + "-" + "0" + str(day)
    print(date)
elif day < 10 and month > 9:
    date = str(year) + "-" + str(month) + "-" + "0" + str(day)
    print(date)
elif day > 9 and month < 10:
    date = str(year) + "-" + "0" + str(month) + "-" + str(day)
    print(date)
else:
    date = str(year) + "-" + str(month) + "-" + str(day)
    print(date)


def leap_year():
    if (year % 100 == 0 and year % 400 != 0) or year % 4 != 0:
        leap_year = False
    else:
        leap_year = True
    return leap_year

def control_number_of_days_in_month():
    # global days_in_month
    if str(month) == "2":
        if leap_year() == False:
            days_in_month = 28
        else:
            days_in_month = 29
    elif str(month) == "4" or str(month) == "6" or str(month) == "9" or str(month) == "11":
        days_in_month = 30
    elif str(month) == "1" or str(month) == "3" or str(month) == "5" or str(month) == "7" or str(month) == "8" or str(month) == "10" or str(month) == "12":
        days_in_month = 31
    return days_in_month

if 0 < month < 13:
    if 0 < day < 32:
        leap_year()
        control_number_of_days_in_month()
        if day < control_number_of_days_in_month():
            if day < 9 and month < 10:
                print("The next day is: " + str(year) + "-" + "0" + str(month) + "-" + "0" + str(day + 1))
            elif day < 9 and month > 9:
                print("The next day is: " + str(year) + "-" + str(month) + "-" + "0" + str(day + 1))
            elif day > 9 and month < 10:
                print("The next day is: " + str(year) + "-" + "0" + str(month) + "-" + str(day + 1))
            else:
                print("The next day is: " + str(year) + "-" + str(month) + "-" + str(day + 1))
        elif day == control_number_of_days_in_month() and month == 12:
                print("The next day is: " + str(year + 1) + "-" + "01" + "-" + "01")
        else:
            if month < 9:
                print("The next day is: " + str(year) + "-" + "0" + str(month + 1) + "-" + "01")
            else:
                print("The next day is: " + str(year) + "-" + str(month + 1) + "-" + "01")
    else: 
        print("Day error")
else: 
    print("Month error")


