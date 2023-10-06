'''
# UNITS OF TIME

Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
Compute and display the total number of seconds represented by this duration.
'''

print("\nThis is a test, please insert an amount of time you did something, espress in days, hours, minutes and seconds.\n")

days = int(input("How many days? "))
hours = int(input("How many hours? "))
minutes = int(input("How many minutes? "))
seconds = int(input("How many seconds? "))

hours += days*24
minutes += hours*60
seconds += minutes*60

print(f"{seconds} seconds")