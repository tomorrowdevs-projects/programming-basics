#function
def days_in_month(month, year):
    if year % 400 == 0:
        leap_year = True
    elif year % 100 == 0:
        leap_year = False
    else:
        leap_year = True

    # Dictionary of days for each month
    days_in_month = {
        1: 31,
        2: 29 if leap_year else 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }

    if month in days_in_month:
        return days_in_month[month]
    else:
        return 0
        
#main program
        
month = int(input("Enter the month (1-12): "))
year = int(input("Enter the year (4 digits): "))

days = days_in_month(month, year)
if days != 0:
    print(f"The month of {month}/{year} has {days} days.")
else:
    print("Invalid input.")