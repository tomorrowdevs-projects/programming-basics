def ordinalDate(day, month, year):
    # Check if year is a leap year
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
        leap = True
    else:
        leap = False

    # Define a list of the number of days in each month
    days_in_month = [31, 28 + leap, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    # Calculate the day within the year
    day_within_year = day
    for i in range(month - 1):
        day_within_year += days_in_month[i]

    return day_within_year

if __name__ == "__main__":
    # Read day, month, and year from the user
    day = int(input("Enter the day: "))
    month = int(input("Enter the month: "))
    year = int(input("Enter the year: "))

    # Call the ordinalDate function and display the result
    day_within_year = ordinalDate(day, month, year)
    print("The day within the year is:", day_within_year)