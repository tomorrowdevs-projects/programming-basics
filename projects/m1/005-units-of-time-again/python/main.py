day_sec = 86400
hours_sec = 3600
minutes_sec = 60
i = 2


print("Insert a number of seconds")
n_seconds = int(input())


# calculation Day

n_day = n_seconds/day_sec


tot_daysec = int(n_day)*day_sec
n_seconds = n_seconds - tot_daysec


# calculation Hours

n_hours = n_seconds/hours_sec


tot_hourssec = int(n_hours)*hours_sec
n_seconds = n_seconds - tot_hourssec


# calculation Minutes

n_minutes = n_seconds/minutes_sec


tot_minutessec = int(n_minutes)*minutes_sec
n_seconds = n_seconds - tot_minutessec




print(str(int(n_day)) + ":" + f"{int(n_hours):0{i}}" + ":" + f"{int(n_minutes):0{i}}" + ":" + f"{int(n_seconds):0{i}}")

#ALT print('{:02}'.format(int(n_hours)))
