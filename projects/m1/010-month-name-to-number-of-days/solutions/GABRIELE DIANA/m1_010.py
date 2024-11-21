# The length of a month varies from 28 to 31 days. 
# In this exercise you will create a program that reads the name of a month from the user as a string. 
# Then your program should display the number of days in that month. 
# Display “28 or 29 days” for February so that leap years are addressed.


user_month = input("Check how many days are in a month: ").lower()
months31 = ["january", "march", "may", "july", "august", "october", "december"]
months30 = ["april", "june", "september", "november"]

if user_month in months31:
    print("31 days")
elif user_month in months30:
    print("30 days")
elif user_month == "february":
    print("28 or 29 days")
else:
    print("Please insert valid value")
