
#UNITS OF TIME

#reads a duration from the user as a number of days, hours, minutes, and seconds.
days_user = int(input('Insert a number of days: '))
hours_user = int(input('Insert a number of hours: '))
minutes_user = int(input('Insert a number of minutes: '))

# Compute and display the total number of seconds represented by this duration.

print(f'Total: {((minutes_user * 60) + (hours_user * 60 * 60) + (days_user * 24 * 60 * 60))} seconds.')


