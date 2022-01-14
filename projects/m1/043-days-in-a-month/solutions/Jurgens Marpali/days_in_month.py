def leap(year):
    if year % 400 == 0 or (year % 100 != 0 and year % 4 == 0):
        return True

def days(month, year):
    if (1 <= month <= 7 % 2 != 0) or (8 <= month <= 12 == 0):
        return 31
    if leap(year) and month == 2:
        return 29
    if not leap(year) and month == 2:
        return 28
    else:
        return 30

def main():
    year = int(input("Enter a Year:"))
    month = int(input("Enter a Month:"))
    print(f"{month} has {days(month, year)} days.")

if __name__ in "__main__":
    main()