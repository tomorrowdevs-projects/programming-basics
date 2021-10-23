# Ask the user for a duration as a number of days, hours, minutes, and seconds
days = int(input('Insert number of days: '))
hours = int(input('Insert number of hours: '))
minutes = int(input('Insert number of minutes: '))
seconds = int(input('Insert number of seconds: '))

# Convert days, hours, minutes in seconds
days_in_seconds = days * 24 * 60 * 60
hours_in_seconds = hours * 60 * 60
minutes_in_seconds = minutes * 60

# Calulate and display total number of seconds
print('\nThe total number of seconds is: ' + str(days_in_seconds + hours_in_seconds + minutes_in_seconds + seconds))
