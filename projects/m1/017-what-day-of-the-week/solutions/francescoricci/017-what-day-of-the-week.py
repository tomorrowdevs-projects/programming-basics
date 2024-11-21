# exercise m1/017 by francesco ricci

#This function return number day of week associating zero to Sunday
def getDayOfWeek(year):
    return ((year + ((year - 1) // 4) - ((year - 1) // 100) + ((year - 1) // 400)) % 7)

#This function return day text of the week associating zero to Sunday
def getDayTextName(day_week):
    if day_week == 0:
        result = "Sunday"
    elif day_week == 1:
        result = "Monday"
    elif day_week == 2:
        result = "Tuesday"
    elif day_week == 3:
        result = "Wednesday"
    elif day_week == 4:
        result = "Thursday"
    elif day_week == 5:
        result = "Friday"
    elif day_week == 6:
        result = "Saturday"

    return result

user_year = input("Insert year : ")
year = int(user_year)

print(f"The first day of the year {year} is {getDayTextName(getDayOfWeek(year))}")
