# Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
#  Compute and display the total number of seconds represented by this duration.

days = int(input("Insert number of days: "))*24*60*60
hours = int(input("Insert number of hours: "))*60*60
minutes = int(input("Insert number of minutes: "))*60
seconds = int(input("Insert number of seconds: "))

print("Risultato: " + str(days+hours+minutes+seconds))
