

year = int(input("Please enter the year: "))

if year % 400 == 0:
    print("This is a leap year")

elif year % 400 == 0:
    year_one = year % 400
    if year_one % 100 == 0:
        print("This isn't a leap year")

elif year % 400 == 0:
    year_two = year % 400
    if year_two % 4 == 0:
        print ("This is a leap year")

else:
    print("This isn't a leap year")