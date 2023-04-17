def is_magic_date(year, month, day):
    last_2_caracther = int(str(year)[-2:])
    mont_x_day = day * month

    # Check if the year is a leap year
    if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
        days_in_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    else:
        days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    # Check if the month and day entered are valid
    if month < 1 or month > 12:
        return "Invalid month entered!"
    elif day < 1 or day > days_in_month[month-1]:
        return "Invalid day entered!"
    else:
        if last_2_caracther == mont_x_day:
            return "It's a magic date!"
        else:
            return "It's not a magic date!"

year = int(input("Enter a 2000 century year (YYYY): "))
month = int(input("Enter the month (MM): "))
day = int(input("Enter the day (DD): "))
while int(str(year)[0]) != 2:
    year = int(input("Only 20th century years are allowed! Please enter a 2000 century year (YYYY): "))
    month = int(input("Enter the month (MM): "))
    day = int(input("Enter the day (DD): "))

if int(str(year)[0]) == 2:
    print(is_magic_date(year, month, day))
else:
    print("Only 20th century years are allowed!")