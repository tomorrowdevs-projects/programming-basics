
def is_magic(day, month, year):
    year = year - 1900
    if day <= day_in_a_month(month, year):
        if day * month == year:
            return True
        else:
            return False
    else:
        return False

def day_in_a_month(month, year):
    months_30 = [4, 6, 9, 11]
    if month in months_30:
        return 30
    elif month == 2:
        if year % 4 == 0:
            return 29
        else:
            return 28
    else:
        return 31

magic_dates = []
def all_years():
    for year in range(1900, 2000):
        for month in range(1, 13):
            for day in range(1, 32):
                if is_magic(day, month, year):
                    date = f"{day}/{month}/{year}"
                    magic_dates.append(date)
    return magic_dates

if __name__ == "__main__":
    choose = input("Do you want to verify a date (type V) or look at the entire list (type L)?\n")
    if choose == "L":
        print(all_years())
    elif choose == "V":
        day, month, year = input("Digit day, month and year separated by comma: ").split(",")
        print(is_magic(int(day), int(month), int(year)))
