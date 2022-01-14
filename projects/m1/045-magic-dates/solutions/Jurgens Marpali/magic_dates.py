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

def magic_date(day, month, year):
    str_year = str(year)

    if day * month == int(str_year[2:]):
        return True

def main():
    for year in range(1900, 2000):
        for month in range(1, 13):
            for day in range(1, days(month, year) + 1):
                if magic_date(day, month, year):
                    print(day, "-", month, "-", year)


if __name__ in "__main__":
    main()