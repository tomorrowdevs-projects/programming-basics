#UNITS-OF-TIME
#Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
# Compute and display the total number of seconds represented by this duration.

d = int (input("Enter the number of days: "))
h = int (input("Enter the number of hours: "))
m = int (input("Enter the number of minutes: "))
s = int (input("Enter the number of seconds: "))
total_seconds = (d * 86400) + (h * 3600) + (m * 60) + s
print ("In total it is", total_seconds, "seconds")