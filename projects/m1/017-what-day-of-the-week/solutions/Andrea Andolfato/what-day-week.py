

year = int(input("Please insert a year"))
day_of_the_week = day_of_the_week = ((year + ((year-1) // 4) - (year - 1) // 100) + ((year - 1) // 400 )) % 7
if day_of_the_week == 0:
    print("sunday")
elif day_of_the_week == 1:
    print("monday")
elif day_of_the_week == 2:
    print("tuesday")
elif day_of_the_week == 3:
    print("wednesday")
elif day_of_the_week == 4:
    print("thursday")
elif day_of_the_week == 5:
    print("friday")
elif day_of_the_week == 6:
    print("saturday")