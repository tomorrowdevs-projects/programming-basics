
# calc minutes
def time_2minutes(hours, minutes, days = 0):
    return ((minutes * 60) + (hours * 60 * 60) + (days * 24 * 60 * 60))


def minutes_2time(s):

    # display the  amount of seconds in day minutes and hours
    day = s // 60 // 60 // 24
    hour = (s // 60 // 60) % 24
    min = (s // 60) % 60   
    return day, hour, min


def slice_time(time):
    colons_position = time.find(':')
    hours = int(time[:colons_position])
    minutes = int(time[colons_position + 1: colons_position + 3])
    return hours, minutes


def add_time(start, duration, week_day = ''):

    #*  start time in the 12-hour clock format (ending in AM or PM) 
    #*  duration time that indicates the number of hours and minutes (hour canbe whole number)
    #*  (optional) a starting day of the week, case insensitive
    
    # find the time value from the string
    start_hour, start_minutes = slice_time(start)
    duration_hour, duration_minutes = slice_time(duration)
    
    #format the time from 12 to 24-hour clock format
    if 'PM' in start: start_hour += 12 
    else: start_hour

    # find tot minutes and sum them together
    second_total = time_2minutes(start_hour, start_minutes) + time_2minutes(duration_hour, duration_minutes)

    # transform minutes to the duration time
    days, hours, min = minutes_2time(second_total)
    
    #format the time from 24 to 12-hour clock format
    if hours < 12:
        clock_format = 'AM'
    else:
        hours -= 12
        clock_format = 'PM'
    if hours == 0: hours = 12

    #display result
    result = f'Total duration: {hours:02d}:{min:02d} {clock_format}, '

    # if is given week_day
    weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday', 'Sunday']

    if week_day:

        # display the current day of the calculation if inserted
        if days == 0:
            result += week_day

        # display (next day) if result is the next day
        elif days == 1:
            result += ' (next day)'

        # display n days later if there are more tha one day passed
        elif days > 1:
            start_day = weekdays.index(week_day) + 1
            end_day_index = (start_day + days - 1) % len(weekdays) 
            result += weekdays[end_day_index]
            result += f' ({days} days later)'

    print(result)
    

def main():
    add_time("3:00 PM", "3:10")
    add_time("11:30 AM", "2:32", "Monday")
    add_time("11:43 AM", "00:20")
    add_time("10:10 PM", "3:30")
    add_time("11:43 PM", "24:20", "Tuesday")
    add_time("6:30 PM", "205:12")
    

if __name__ == '__main__':
    main()