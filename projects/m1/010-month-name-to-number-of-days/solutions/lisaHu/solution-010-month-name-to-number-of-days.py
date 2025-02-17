#The length of a month varies from 28 to 31 days. 
#In this exercise you will create a program that reads the name of a month from the user as a string. 
#Then your program should display the number of days in that month. Display “28 or 29 days” for February so that leap years are addressed.

month = input("Enter month: ")

if month == "january" or month == "march" or month == "may" or month == "july" or month == "august" or month == "october" or month == "december":
    print(month + " has 31 days!")
elif month == "april" or month == "june" or month == "september" or month == "november":
    print(month + " has 30 days!")
elif month == "february":
    print(month + " has 28 days! If it's in a leap year, it has 29 days!")
else:
    print("Please, refresh and enter a valid month.")