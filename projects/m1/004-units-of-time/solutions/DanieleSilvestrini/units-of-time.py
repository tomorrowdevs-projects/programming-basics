a, b, c, d = input("Enter number of days, hours, minutes and seconds separated by a whitespace: " ).split()

days = int(a)
hours = int(b)
minutes = int(c)
seconds = int(d)

def seconds_ammount(days, hours, minutes, seconds):
    seconds_day = days * 24 * 60 * 60
    seconds_hours = hours * 60 * 60
    seconds_minutes = minutes * 60
    return seconds_day + seconds_hours + seconds_minutes + seconds 

print("The total ammount of seconds are: " + str(seconds_ammount(days, hours, minutes, seconds)))