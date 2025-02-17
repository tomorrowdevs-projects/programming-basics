print("Insert Days duration")
d_day = int(input())

print("Insert Hours duration")
d_hours = int(input())

print("Insert Minutes duration")
d_minutes = int(input())

print("Insert Seconds duration")
d_seconds = int(input())

print("Your duration is: ", d_day, "days", d_hours, "hours", d_minutes, "minutes", d_seconds, "seconds")

tot_d = d_day*86400

tot_h = d_hours*3600

tot_m = d_minutes*60

tot_duration = tot_d + tot_h + tot_m + d_seconds

print("The duration in seconds is: ", tot_duration, "seconds")
