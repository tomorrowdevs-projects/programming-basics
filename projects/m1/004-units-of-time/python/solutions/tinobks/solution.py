days = input("Number of days: ")
hours = input("Number of hours: ")
minutes = input("Number of minutes: ")
seconds = input("Number of seconds: ")


#calcolare quanti secondi totali ci sono

days_second = int(days) * 86400
hours_second = int(hours) * 3600
minutes_second = int(minutes) * 60

total_seconds = int(days_second) + int(hours_second) + int(minutes_second) + int(seconds)

print("The total number of seconds represented by this duration is {}" .format(total_seconds))


