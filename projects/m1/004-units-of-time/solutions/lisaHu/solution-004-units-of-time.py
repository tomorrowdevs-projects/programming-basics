#Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
#Compute and display the total number of seconds represented by this duration.


daysInput = input("Enter number of days: ")
hoursInput = input("Enter number of hours: ")
minutesInput = input("Enter number of minutes: ")
secondsInput = input("Enter number of seconds: ")

secondsPerDay = int(daysInput) * 60 * 60 * 24
secondsPerHour = int(hoursInput) * 60 * 60
secondsPerMinute = int(minutesInput) * 60

totalSeconds = secondsPerDay + secondsPerHour + secondsPerMinute + int(secondsInput)
print()
print("The total number of seconds present in this time span is: " + str(totalSeconds))