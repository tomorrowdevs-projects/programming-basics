# This function returns true if the month and year entered by the user are valid
def check_input(month, year):
    if month.isnumeric() == True and  1 <= int(month) <= 12:
        if year.isnumeric() == True and len(year) == 4:        
            return(True)
        else: return print("Error! The year must be a four digit number.")
    else: return print("Error! The month must be an integer between 1 and 12.")    

# This function takes a year as a parameter, returns true if the year is a leap year, false if it is not
def leap_year(year):
    if year % 100 == 0:
        if year % 400 == 0: return(True)
        else: return(False)
    elif year % 4 == 0: return(True)
    else: return(False)

# This function that takes a month and a year and returns the number of days in that month
def days_in_a_month(month, year):
    days_for_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    month, year = int(month), int(year)
    if leap_year(year) == True: 
        days_for_month[1] = 29
    return days_for_month[month-1]

# Main program that reads a month and year from the user and displays the number of days in that month
def main():
    month_user = input("Enter the month: ")
    year_user = input("Enter the year: ")
    if check_input(month_user, year_user) == True:
        days = days_in_a_month(month_user, year_user)
        print("Month {} of the year {} has {} days.".format(month_user, year_user, days))

if __name__ == "__main__":
    main()