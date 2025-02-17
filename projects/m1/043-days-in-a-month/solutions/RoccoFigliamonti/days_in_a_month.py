"""# Days in a Month

Write a function that determines how many days there are in a particular month.
Your function will take two parameters: The month as an integer between 1 and 12, and the year as a four digit integer.
Ensure that your function reports the correct number of days in February for leap years.
Include a main program that reads a month and year from the user and displays the number of days in that month. 
"""

def days_in_month(month,year):
    """This function return the number of days in a given month, considering if it's a leap year or not"""
    if month in range(1,13):
        conversion_leap = {1:31, 2:29, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31}
        if (year % 400 == 0 and year % 100 == 0) or (year % 4 == 0 and year % 100 !=0): #leap year
            return conversion_leap[month]
        else:
            if month == 2:
                return conversion_leap[month]-1
            else:
                return conversion_leap[month]        
    else:
        mex = "invalide date"
        return mex


print(days_in_month(16,2020))
print(days_in_month(10,2020))
print(days_in_month(9,2021))
print(days_in_month(2,2020))
print(days_in_month(2,2021))

month = int(input("Enter the month: "))
year = int(input("Enter the year: "))
print(f"{month}-{year} has {days_in_month(month, year)} days.")
