def days(month, year):
    months_days = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}
    if year % 400 == 0 or (year % 100 != 0 and year % 4 == 0):
        months_days[2] = 29
    number_day = months_days[month]
    return number_day


if __name__ == '__main__':
    m = int(input("Enter a month (between 1 and 12): "))
    y = int(input("Enter a 4-digit year : "))
    print(f"The month n.{m} of the year {y} has {days(m,y)} days.")