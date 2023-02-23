#Create a program that reads a duration from the user as a number of days, hours, minutes, and seconds. 
#Compute and display the total number of seconds represented by this duration.

days = input("Insert days ---> ")
conversion_of_days_to_seconds = (days * 86400)

hours = input("Insert hours ---> ")
conversion_of_hours_to_seconds = (hours * 3600)

minutes = input("Insert minutes ---> ")
conversion_of_minutes_to_seconds = (minutes * 60)

seconds = input("Insert seconds ---> ")

print(f"Conversion of the Duration to seconds: {conversion_of_days_to_seconds + conversion_of_hours_to_seconds + conversion_of_minutes_to_seconds + seconds} seconds")



