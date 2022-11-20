# The function from_time_to_seconds that takes as parameter a string that can be a time or a duration and transforms it into seconds.
def from_time_to_seconds(time):
    seconds_per_minute = minutes_per_hour = 60
    # here I'm going to take from the time string the part containing only the minutes and hours and I'll call it extract time.
    # then I go to extract and insert the minutes and hours into variables and I check that the minutes are less than 60
    if time[-2:] == "AM" or time[-2:] == "PM":
        extract_time = time[:time.index(" ")]
    else: extract_time = time
    hour = int(extract_time[:extract_time.index(":")])
    minutes = int(extract_time[extract_time.index(":")+1:])
    if minutes >= 60: 
        print ("Error! Minutes must be an integer less than 60.")
        return(False)

    # I calculate the number of seconds depending on whether it is AM or PM time.
    if time[-2:] == "AM":
        if hour == 12:
            seconds = minutes * seconds_per_minute
        else:
            seconds = ((hour * minutes_per_hour) + minutes) * seconds_per_minute
    elif time[-2:] == "PM":
        if hour == 12:
            seconds = ((hour * minutes_per_hour) + minutes) * seconds_per_minute
        else:
            seconds = (((hour + 12) * minutes_per_hour) + minutes) * seconds_per_minute
    else: seconds = ((hour * minutes_per_hour) + minutes) * seconds_per_minute
    return(seconds)

# The function add_time takes takes as parameters: 
# - a start time in 12-hour clock format (ending in AM or PM);
# - a duration time that indicates the number of hours and minutes;
# - (optional) a starting day of the week, case insensitive
# The function should add the duration time to the start time and return the result.
def add_time(start_time, duration_time, day = ""):
    seconds_per_day = 86400
    seconds_per_hour = 3600
    seconds_per_minute = 60      
    day_of_the_week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

    # first I'm going to calculate the time that has elapsed by adding the seconds of start_time with those of duration_time.
    if from_time_to_seconds(start_time) != False and from_time_to_seconds (duration_time) != False:
        elapsed_time = from_time_to_seconds(start_time) + from_time_to_seconds(duration_time)
        # then i go to calculate how many days have passed by dividing all the elapsed time by 86400 (the seconds in a day).
        days_later = elapsed_time // seconds_per_day
        # then I'm going to calculate the seconds of the current day by subtracting the number of seconds from the previous days from the elapsed time.
        current_seconds = elapsed_time - (seconds_per_day * days_later)
        # I'm going to calculate the current hour by dividing the seconds of the current day by 3600 (the number of seconds per hour).
        current_hour = current_seconds // seconds_per_hour
        # Finally I'm going to calculate the current minutes by subtracting the seconds of the hours from the current seconds and dividing everything by 60 (seconds per minute).
        current_minutes = (current_seconds - (seconds_per_hour * current_hour)) // seconds_per_minute

    # Here I go to check if the seconds are above 43200 to see if it is an AM or PM time.
        if current_seconds > 43200:
            if current_hour != 12: 
                current_hour -= 12
            result = "{:02}:{:02} PM".format(current_hour, current_minutes)
        else: result = "{:02}:{:02} AM".format(current_hour, current_minutes)

        if day.lower() in day_of_the_week:
            current_day = days_later % (len(day_of_the_week) - day_of_the_week.index(day.lower()))
            result += ", {}".format(day_of_the_week[current_day])
        if days_later == 1: result += " (next day)"
        elif days_later > 1: result += " ({} days later)".format(days_later)
        print(result)

if __name__ == "__main__":
    add_time("3:00 PM", "3:10")
    add_time("11:43 AM", "00:20")
    add_time("10:10 PM", "3:30")
    add_time("6:30 PM", "205:12")
    add_time("11:30 AM", "2:32", "Monday")
    add_time("11:43 PM", "24:20", "tueSday")