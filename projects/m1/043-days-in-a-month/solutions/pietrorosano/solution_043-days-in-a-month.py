# Write a function that determines how many days there are in a particular month.
# Your function will take two parameters: The month as an integer between 1 and 12,
# and the year as a four digit integer.
# Ensure that your function reports the correct number of days in February for leap years.
# Include a main program that reads a month and year from the user and displays the number of days in that month.

print("\nEnter a month:")
month = int(input())
print("\nEnter a year")
year = int(input())

def daysInMonth(m, y):
    if m == 1 or m == 3 or m == 5 or m == 7 or m == 8 or m == 10 or m == 12:
        print("31 days")
    elif m == 4 or m == 6 or m == 9 or m == 11:
        print("30 days")
    elif m == 2 and year % 400 == 0:
        print("29 days")
    elif m == 2 and year % 100 == 0 and year % 400 != 0:
        print("28 days")
    elif m == 2 and year % 4 == 0 and year % 400 != 0 and year % 100 != 0:
        print("29 days")
    else:
        print("28 days")

daysInMonth(month, year)