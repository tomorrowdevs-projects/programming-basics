year = int(input("Insert a year "))

day_of_the_week = (year + ((year-1)//4) - ((year-1)//100) + ((year -1)//400)) % 7

if day_of_the_week == 0:
    name_of_the_day="Sunday"
elif day_of_the_week == 1:
    name_of_the_day="Monday"
elif day_of_the_week == 2:
    name_of_the_day="Tuesday"
elif day_of_the_week == 3:
     name_of_the_day="Wednesday"
elif day_of_the_week == 4:
    name_of_the_day="Thursday"
elif day_of_the_week == 5:
    name_of_the_day="Friday"
elif day_of_the_week== 6:
    name_of_the_day="Saturday"

print("{} January 1 --> {}".format(year,name_of_the_day))
