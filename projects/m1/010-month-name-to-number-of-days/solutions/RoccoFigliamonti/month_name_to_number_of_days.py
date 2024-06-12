"""
The length of a month varies from 28 to 31 days. 
In this exercise you will create a program that reads the name of a month from the user as a string. 
Then your program should display the number of days in that month. Display “28 or 29 days” for February so that leap years are addressed.
"""

month = str(input("Please type a month: ")).capitalize()

months_of_31days = ["January","March","May","July","August","October","December"]
months_of_30days = ["April", "June", "September","November"]

if month in months_of_31days:
    print("The month " + month + " has 31 days!")
elif month in months_of_30days:
    print("The month " + month + " has 30 days!")
elif month == "February":
    print("The month February has 28 or 29 days!")
else:
    print("invalid month name!")
