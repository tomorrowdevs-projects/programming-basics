# function that checks if the date is valid, if it is it returns true otherwise it returns false
def check_date(check_day, check_month, check_year):
    days_for_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if check_day.isnumeric() == True and check_month.isnumeric() == True and check_year.isnumeric() == True:
        check_day, check_month, check_year = int(check_day), int(check_month), int(check_year)
    else: return(False)
    if leap_year(check_year) == True: days_for_month[1] = 29
    if check_month < 1 or check_month > 12: return(False)
    if check_day < 1 or check_day > days_for_month[check_month-1]: return(False)
    return(True)

# function that takes a year as a parameter, returns true if the year is a leap year, false if it is not
def leap_year(year):
    if year % 100 == 0:
        if year % 400 == 0: return(True)
        else: return(False)
    elif year % 4 == 0: return(True)
    else: return(False)

# this function converts a Gregorian date to an ordinal, returning the day within the year for that date
def ordinal_date(day, month, year):
    days_for_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if leap_year(year) == True: days_for_month[1] = 29
    ordinalDay = sum(days_for_month[:month-1]) + day
    return(ordinalDay)

# main program that reads day, month and year from the user and displays the day within the year for that date
def main():
    user_day = input("Enter the day: ")
    user_month = input("Enter the month: ")
    user_year = input("Enter the year: ")
    if check_date(user_day, user_month, user_year) == False:
        print("Error! Enter a valid date")
        main()
    else: 
        ordinal_day = ordinal_date(int(user_day), int(user_month), int(user_year))
        print("{}/{}/{} corresponds to day {} of the year {}".format(user_day, user_month, user_year, ordinal_day, user_year ))

if __name__ == "__main__":
    main()