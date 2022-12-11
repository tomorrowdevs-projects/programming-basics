year = int(input("Enter a year: "))

if year % 100 == 0:
    if year % 400 == 0:
        print("It's a leap year")
    else: print("It's not a leap year")

if year % 100 != 0:
    if year % 4 == 0:
        print("It's a leap year")
    else: print("It's not a leap year")