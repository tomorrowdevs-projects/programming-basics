def add_time(start_time, duration_time, day_week):
    start, original_am_pm = map(str, start_time.split(' '))
    hour_start, minutes_start = map(int, start.split(':'))
    hour_duration, minutes_duration = map(int, duration_time.split(':'))
    #calculation of minutes
    if minutes_start + minutes_duration < 60:
        minutes_total= minutes_start + minutes_duration
    else:
        minutes_total= (minutes_start + minutes_duration) - 60
        hour_duration+=1
    #calculation of hours
    if hour_start+hour_duration <= 12:
        hour_total= hour_start+hour_duration
        original_am_pm=am_pm
    elif 12 < hour_start+hour_duration < 24:
        hour_total= (hour_start+hour_duration)-12
        if original_am_pm=="AM":
            am_pm="PM"
        elif original_am_pm=="PM":
            am_pm="AM"
    else:
        hour_max = ((hour_start+hour_duration)//24)-1
        if hour_max<=12:
            hour_total=hour_max
            am_pm="AM"
        else:
            hour_total=hour_max-12
            am_pm="PM"
    #calculation of days
    if day_week=="" and hour_start+hour_duration < 24 and original_am_pm=="AM":
        print(f"{str(hour_total).zfill(2)}:{str(minutes_total).zfill(2)} {am_pm}")
    elif day_week=="" and hour_start+hour_duration < 12 and original_am_pm=="PM":
        print(f"{str(hour_total).zfill(2)}:{str(minutes_total).zfill(2)} {am_pm}")
    else:
        if hour_start+hour_duration < 12 and original_am_pm=="PM":
                print(f"{str(hour_total).zfill(2)}:{str(minutes_total).zfill(2)} {am_pm}, {day_week}")
        elif hour_start+hour_duration < 24 and original_am_pm=="AM":
                print(f"{str(hour_total).zfill(2)}:{str(minutes_total).zfill(2)} {am_pm}, {day_week}")
        elif 12 < hour_start+hour_duration < 36 and original_am_pm=="PM":
                print(f"{str(hour_total).zfill(2)}:{str(minutes_total).zfill(2)} {am_pm}, next day")
        elif 24 < hour_start+hour_duration < 48 and original_am_pm=="AM":
                print(f"{str(hour_total).zfill(2)}:{str(minutes_total).zfill(2)} {am_pm}, next day")
        else:
                if original_am_pm=="AM":
                    n_days = round((hour_start+hour_duration-12)/24)
                    print(f"{str(hour_total).zfill(2)}:{str(minutes_total).zfill(2)} {am_pm}, {n_days} days later")
                elif original_am_pm=="PM":
                    n_days = round((hour_start+hour_duration)/24)
                    print(f"{str(hour_total).zfill(2)}:{str(minutes_total).zfill(2)} {am_pm}, {n_days} days later")
    
start_time=str(input("Insert your start time in this format: HH:MM AM/PM. "))
duration_time= str(input("Insert the duration time in this format: HH:MM. "))
day_week=str(input("Insert what day of week it is: (if you don't want to specify that, don't write in this field): "))
add_time(start_time, duration_time, day_week)