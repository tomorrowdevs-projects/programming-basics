import math
year = int(input("Insert a year\n"))
day_of_the_week = (year + math.floor((year - 1) / 4) - math.floor((year - 1) / 100) + math.floor((year - 1) / 400)) % 7
if day_of_the_week == 0:
    day_of_the_week_name = "Sunday"
elif day_of_the_week == 1:
    day_of_the_week_name = "Monday"
elif day_of_the_week == 2:
    day_of_the_week_name = "Tuesday"
elif day_of_the_week == 3:
    day_of_the_week_name = "Wednesday"
elif day_of_the_week == 4:
    day_of_the_week_name = "Thursday"
elif day_of_the_week == 5:
    day_of_the_week_name = "Friday"
elif day_of_the_week == 6:
    day_of_the_week_name = "Saturday"
print("First january in " + str(year) + " was: " + day_of_the_week_name)
