def add_time(start, duration, day=None):
    s_hour = int(start[:-6])                # I crated differnt variables: start minutes and start hours
    s_minutes = int(start[-5:-3])
    day_period = str(start[-2:])
    
    d_hour = int(duration[:-3])             # The seem for the duration minutes and duration hours
    d_minutes = int(duration[-2:])


    sum_minutes = s_minutes + d_minutes
    sum_hour = s_hour + d_hour
    count_day = 0

    if sum_minutes >= 60:                   # The remaning minutes will be come hours
        sum_minutes = sum_minutes - 60
        sum_hour += 1

    while sum_hour >= 12:                  # The reamning hours will be come days
        if day_period == 'PM':
            sum_hour -= 12
            count_day += 1
            day_period = 'AM'
            
        elif day_period == 'AM':
            sum_hour -= 12
            day_period = 'PM'

    if sum_hour == 0:                       # Alter the zero in tewlve
        sum_hour = 12
        
    if day == None:                         # I insert a condition if the function is given the optional day of the week parameter
        
        if count_day == 1:
            result = f'{sum_hour:02}' + ':' + f'{sum_minutes:02}' + ' ' + str(day_period) + ', next day'
        elif count_day > 1:
            result = f'{sum_hour:02}' + ':' + f'{sum_minutes:02}' + ' ' + day_period + ', ' + str(count_day) + ' days later'
        elif count_day == 0:
            result = f'{sum_hour:02}' + ':' + f'{sum_minutes:02}' + ' ' + day_period
        return result

    else:
        while count_day > 7:
            count_day -= - 7

        day = day.casefold()                # Return a string where all characters are lower case

        if day == 'monday':
            n_day_w = 1 + count_day 
        elif day == 'tuesday':
            n_day_w = 2 + count_day
        elif day == 'wednesday':
            n_day_w = 3 + count_day
        elif day == 'thursday':
            n_day_w = 4 + count_day
        elif day == 'friday':
            n_day_w = 5 + count_day 
        elif day == 'saturday':
            n_day_w = 6 + count_day 
        elif day == 'sunday':
            n_day_w = 7 + count_day
            
        if n_day_w == 1 or n_day_w == 8:
            n_day_w = 'Monday'
        elif n_day_w == 2 or n_day_w == 9:
            n_day_w = 'Tuesday'
        elif n_day_w == 3 or n_day_w == 10:
            n_day_w = 'Wednesday'
        elif n_day_w == 4 or n_day_w == 11:
            n_day_w = 'Thursday'
        elif n_day_w == 5 or n_day_w == 12:
            n_day_w = 'Friday'
        elif n_day_w == 6 or n_day_w == 13:
            n_day_w = 'Saturday'
        elif n_day_w == 7 or n_day_w == 14:
            n_day_w = 'Sunday'

        if count_day == 1:
            result = f'{sum_hour:02}' + ':' + f'{sum_minutes:02}' + ' ' + day_period + ' ' + str(n_day_w) + ', next day'
        elif count_day > 1:
            result = f'{sum_hour:02}' + ':' + f'{sum_minutes:02}' + ' ' + day_period + ' ' + str(n_day_w) + ', ' + str(count_day) + ' days later'
        elif count_day == 0:
            result = f'{sum_hour:02}' + ':' + f'{sum_minutes:02}' + ' ' + day_period + ' ' + str(n_day_w)
        return result
    
def main():
 
    print(add_time("3:00 PM", "3:10"))
    print(add_time("11:30 AM", "2:32", "monday"))
    print(add_time("11:43 AM", "00:20"))
    print(add_time("10:10 PM", "3:30"))
    print(add_time("11:43 PM", "24:20", "tueSday"))
    print(add_time("6:30 PM", "205:12"))

main()


