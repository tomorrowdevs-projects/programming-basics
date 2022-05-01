
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

if __name__ == "__main__":
    month = int(input("Choose the month as an integer between 1 and 12:\n"))
    if month in range(1,13):
        year = int(input("Choose the year:\n"))
        print(f"The month you have choosed has {day_in_a_month(month, year)} days")
    else:
        print("The month is not in range")
  