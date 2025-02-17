year = int(input("insert a year to discover if is a leap year\n"))

if (year % 100 == 0 and year % 400 != 0) or year % 4 != 0:
    print(str(year) + " is not a leap year")
else:
    print(str(year) + " is a leap year")
