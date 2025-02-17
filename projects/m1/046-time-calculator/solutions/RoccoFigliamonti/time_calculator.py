"""
Write a function named `add_time` that takes in two required parameters and one optional parameter:
* a start time in the 12-hour clock format (ending in AM or PM) 
* a duration time that indicates the number of hours and minutes
* (optional) a starting day of the week, case insensitive

The function should add the duration time to the start time and return the result.

If the result will be the next day, it should show `(next day)` after the time. If the result will be more than one day later, it should show `(n days later)` after the time, where "n" is the number of days later.

If the function is given the optional starting day of the week parameter, then the output should display the day of the week of the result. The day of the week in the output should appear after the time and before the number of days later."""


def add_time(start_time, duration_time, starting_day =""):

    #parsing
    start_hour = int(start_time.split(":")[0])
    start_minutes = int((start_time.split(":")[1].split()[0]))
    start_am_or_pm = (start_time.split(":")[1].split()[1])
    duration_hour = int(duration_time.split(":")[0])
    duration_minutes = int(duration_time.split(":")[1])
    final_am_or_pm = ""

    #new time
    new_minutes = (start_minutes + duration_minutes)%60 #resto della somma dei minuti
    new_hours = ((start_hour+duration_hour) + (start_minutes+duration_minutes)//60)%12 #resto della somma delle ore + del quozionte della somma dei minuti

    #AM or PM 
    if (start_am_or_pm == "AM" and \
       (((start_hour+duration_hour) + (start_minutes+duration_minutes)//60)//12)%2 == 0) \
        or \
        (start_am_or_pm == "PM" and \
       (((start_hour+duration_hour) + (start_minutes+duration_minutes)//60)//12)%2 != 0):
        final_am_or_pm = "AM"
    else:
        final_am_or_pm = "PM"
    
    #counting days passed
    if start_am_or_pm == "AM":
        days_gone = ((start_hour+duration_hour) + (start_minutes+duration_minutes)//60)//24
    else:
        days_gone = ((12+start_hour+duration_hour) + (start_minutes+duration_minutes)//60)//24

    #days optional parameter
    calendar = {"monday":0, "tuesday":1, "wednesday":2, "thursday":3, "friday":4, "saturday":5, "sunday":6}
    if starting_day.lower() in calendar.keys():
        new_day_value = (calendar[starting_day.lower()] + days_gone)%7
        new_calendar = {v:k for k,v in calendar.items()}
        new_day_key = new_calendar[new_day_value]

    #final output format
    if days_gone == 0 and starting_day !="":
        time_mex = (f"{new_hours}:{new_minutes:02d} {final_am_or_pm}, {new_day_key}")
    elif days_gone == 0:
        time_mex = (f"{new_hours}:{new_minutes:02d} {final_am_or_pm} ")
    elif days_gone == 1 and starting_day !="":
        time_mex = (f"{new_hours}:{new_minutes:02d} {final_am_or_pm}, {new_day_key} (next day)")
    elif days_gone == 1:
        time_mex = (f"{new_hours}:{new_minutes:02d} {final_am_or_pm} (next day)")
    elif days_gone > 1 and starting_day !="":
        time_mex = (f"{new_hours}:{new_minutes:02d} {final_am_or_pm}, {new_day_key} ({days_gone} days later)")
    else:
        time_mex = (f"{new_hours}:{new_minutes:02d} {final_am_or_pm} ({days_gone} days later)")
    
    return time_mex


print(add_time("3:00 PM", "3:10"))
# Returns: 6:10 PM

print(add_time("11:30 AM", "2:32", "Monday"))
# Returns: 2:02 PM, Monday

print(add_time("11:43 AM", "00:20"))
# Returns: 12:03 PM

print(add_time("10:10 PM", "3:30"))
# Returns: 1:40 AM (next day)

print(add_time("11:43 PM", "24:20", "tueSday"))
# Returns: 12:03 AM, Thursday (2 days later)

print(add_time("6:30 PM", "205:12"))
# Returns: 7:42 AM (9 days later)

