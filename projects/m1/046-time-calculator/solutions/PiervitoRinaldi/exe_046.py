def add_time_no_day(start, duration, day): # Enter 'start' and 'duration' with the time format 00:00
    s_hour = int(start[:2])                # I crated differnt variables: start minutes and start hours
    s_minuts = int(start[-2:])

    d_hour = int(duration[:2])             # The seem for the duration minutes and duration hours
    d_minuts = int(duration[-2:])
    sum_minuts = s_minuts + d_minuts
    sum_hour = s_hour + d_hour
    n = 0

    if sum_minuts >= 60:                   # The remaning minutes will be come hours
        sum_minuts = sum_minuts - 60
        sum_hour += 1
    while sum_hour >= 24:                  # The remaning hour will be come days
        sum_hour = sum_hour - 24
        n += 1
    
    if day == '':       # I insert a condition if the function is given the optional day of the week parameter
        
        if n == 1:
            result = str("%02i" %(sum_hour)) + ':' + str("%02i" %(sum_minuts)) + ', next day'
        else:
            result = str("%02i" %(sum_hour)) + ':' + str("%02i" %(sum_minuts)) + ', ' + str(n) + ' days later'

        return result

    else:
        while n > 7:
            n -= - 7

        if day == 'monday' or day == 'Monday':
            n_day_w = 1 + n 
        elif day == 'Tuesday' or day == 'tuesday':
            n_day_w = 2 + n 
        elif day == 'wednesday' or day == 'Wednesday':
            n_day_w = 3 + n
        elif day == 'Thursday' or day == 'thursday':
            n_day_w = 4 + n
        elif day == 'friday' or day == 'Friday':
            n_day_w = 5 + n 
        elif day == 'saturday' or day == 'Saturday':
            n_day_w = 6 + n 
        elif day == 'sunday' or day == 'Sunday':
            n_day_w = 7 + n
            
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

        if n == 1:
            result = str("%02i" %(sum_hour)) + ':' + str("%02i" %(sum_minuts)) + ' ' + str(n_day_w) + ', next day'
        else:
            result = str("%02i" %(sum_hour)) + ':' + str("%02i" %(sum_minuts)) + ' ' + str(n_day_w) + ', ' + str(n) + ' days later'

        return result
    
