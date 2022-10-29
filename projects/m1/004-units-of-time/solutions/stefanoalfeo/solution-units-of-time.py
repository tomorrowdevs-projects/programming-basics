# durata impostata dall'utente
print("insert number of days for conversion")
days = int(input())
print("insert number of hours for conversion")
hours = int(input())
print("insert number of minutes for conversion")
minutes = int(input())
print("insert number of seconds for conversion")
seconds = int(input())

# stampa durata totale
print("duration: " + str(days) + "d " + str(hours) + "h " + str(minutes) + "m " + str(seconds) + "s ")

# conversione unità di tempo in secondi
unit_in_seconds = [86400, 3600, 60]
day_in_seconds, hour_in_seconds, minute_in_seconds = unit_in_seconds

# stampa durta totale in secondi 
total_duration_in_seconds = ((days * day_in_seconds) + (hours * hour_in_seconds) + (minutes * minute_in_seconds) + (seconds))
print("total duration in seconds: " + str(total_duration_in_seconds) + "s")