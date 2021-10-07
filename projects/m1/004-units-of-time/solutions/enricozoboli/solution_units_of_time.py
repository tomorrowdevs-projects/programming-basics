SECONDS_IN_A_MINUTE = 60

# Ask the user for the number of days , hours, minutes and seconds  
number_of_days = int(input("Insert number of days: "))
number_of_hours = int(input("Insert number of hours: "))
number_of_minutes = int(input("Insert number of minutes: "))
number_of_seconds = int(input("Insert number of seconds: "))

# Compute the total of seconds for days, hour and minute
total_day_seconds = number_of_days * 24 * 60  * SECONDS_IN_A_MINUTE
total_hour_seconds = number_of_hours * 60  * SECONDS_IN_A_MINUTE
total_minutes_seconds = number_of_minutes * SECONDS_IN_A_MINUTE

# Compute the total of seconds 
total_of_seconds = (total_day_seconds + total_hour_seconds 
    + total_minutes_seconds + number_of_seconds)

print(total_of_seconds)
