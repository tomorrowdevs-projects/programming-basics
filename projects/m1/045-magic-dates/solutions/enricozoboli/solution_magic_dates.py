def is_leap(year):
    if year % 400 == 0 or (year % 100 != 0 and year % 4 == 0):
        return True

def days_month(month, year):
    if  (1 <= month <= 7 and month % 2 != 0) or(
      (8 <= month <= 12 and month % 2 == 0)
      ):
        return 31
    if is_leap(year) and month == 2:
        return 29 
    if not is_leap(year) and month == 2:
        return 28
    else:
        return 30

def is_magic_date(day, month, year):
    str_year = str(year)
    if day * month == int(str_year[2:]):
        return True


def main():
    for year in range(1900, 2000):
        for month in range(1, 13):
            for day in range(1, days_month(month, year)):
                if is_magic_date(day, month, year):
                    print(f"{day}-{month}-{year}")


if __name__ == "__main__":
    print("Magic dates in the 20th century: ")
    main()