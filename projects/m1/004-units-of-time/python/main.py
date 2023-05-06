#executions of exercise

days = int(input('your days'))
hours = int(input('your hours'))
minutes = int(input('your minutes'))
seconds = int(input('your seconds'))

def seconds_ammount(days, hours, minutes, seconds):
    seconds_day = days * 24 * 60 * 60
    seconds_hours = hours * 60 * 60
    seconds_minutes = minutes * 60
    return seconds_day + seconds_hours + seconds_minutes + seconds 

print("The total ammount of seconds are: " + str(seconds_ammount(days, hours, minutes, seconds)))