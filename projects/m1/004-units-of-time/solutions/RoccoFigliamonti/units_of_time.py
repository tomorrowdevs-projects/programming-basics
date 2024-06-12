"""# UNITS OF TIME

Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
Compute and display the total number of seconds represented by this duration.
"""

days=int(input("Please type number of days: "))
hours=int(input("Please type number of hours: "))
minutes=int(input("Please type number of minutes: "))
seconds=int(input("Please type number of seconds: "))

total= seconds+minutes*60+hours*60*60+days*24*60*60

print(f"The total amount of seconds is: {total}")