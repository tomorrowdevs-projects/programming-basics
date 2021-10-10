# The length of a month varies from 28 to 31 days. In this exercise you will create a program that reads the name of a month from the user as a string. Then your program should display the number of days in that month. Display “28 or 29 days” for February so that leap years are addressed.
print("\nEnter the month's name")
month = input()
if month == "January" or month == "March" or month == "May" or month == "July" or month == "August" or month == "October" or month == "December":
    print(month + " has 31 days.")
elif month == "April" or month == "June" or month == "September" or month == "November":
    print(month + " has 30 days.")
elif month == "February":
    print(month + " has 28 or 29 days.")