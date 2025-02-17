import math

print("insert time in seconds:")
number_in_seconds = int(input())


print("time in seconds: " + str(number_in_seconds) + "ss")
# unità di tempo in secondi 
day_in_seconds = 86400
hour_in_seconds = 3600
minute_in_seconds = 60

# start con giorni 
operation = number_in_seconds / day_in_seconds
remaining_time = number_in_seconds % day_in_seconds
days = math.trunc(number_in_seconds / day_in_seconds)

# passo alle ore 
operation = remaining_time / hour_in_seconds
hours = math.trunc(remaining_time / hour_in_seconds)
remaining_time = remaining_time % hour_in_seconds


# passo ai minuti 
operation = remaining_time / minute_in_seconds
minutes = math.trunc(remaining_time / minute_in_seconds)
remaining_time = remaining_time % minute_in_seconds


# passo ai secondi 
seconds = remaining_time

print("converted time: " + str(days) + "dd " + str(hours) + "hh " + str(minutes) + "mm " + str(seconds) + "ss")