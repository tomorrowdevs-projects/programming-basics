def add_time(start, duration, day=''):
    #sum of hours/minutes of starting time and duration time
    #I used the negative values to always make sure that the correct values are used
    #eg. the user could input 11:01 or 1:01 (total characters of hours are different)
    hour = int(start[:-6]) + int(duration[:-3])
    minutes = int(start[-5:-3]) + int(duration[-2:])
    n_day = 0
    half_day = 0

    #if total of minutes is 60 or more, the result of floor division is added to hours
    #the remainder is left to minutes
    if minutes >= 60:
        hour += minutes // 60
        minutes %= 60
    #if total of hours is 13 or more, the result of division becomes total of 12-hour periods
    #the remainder is left to hours
    if hour >= 13:
        half_day = hour // 12
        hour %= 12
    
    end = str(f"{hour:02d}") + ':' + str(f"{minutes:02d}")

    #if total of half_day is odd, invert AM and PM
    #if it goes from PM to AM, a day is added as it's authomatically the next day
    if half_day % 2 != 0:
        if start[-2:].upper() == 'AM':
            end += ' PM'
        else:
            end += ' AM'
            n_day += 1
    #if total of half_day is even, AM and PM stay the same
    else:
        if start[-2:].upper() == 'AM':
            end += ' AM'
        else:
            end += ' PM'

    #calculate how many days passed from starting time to ending time + addition day if necessary
    if half_day >= 2:
        n_day = (half_day // 2) + n_day
    
    week = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']

    #calculate which week day is for ending time using list
    if day.lower():
        #find numerical position of the entered week day and add total of days that have passed to get index
        index = week.index(day) + n_day
        #if index is bigger than 6, it's left only the remainder between index and total of week days
        if index > 6:
            index %= 6
        day = week[index]
        end = end + ' ' + day
    else:
        day = ''

    if n_day == 1:
        n_day = ' (next day)'
    #if not a day has passed, n_day will be an empty var
    elif n_day == 0:
        n_day = ''
    else:
        n_day = ' (' + str(n_day) + ' days later)'
    
    end += n_day
    return end

#get input from user and eventually call function
if __name__=='__main__':
    choice = input('Do you want to input your own times and weekday? (y/n): ')
    if choice == 'y':
        start_time = input('Enter starting time in format HH:MM AM/PM = ')
        duration_time = input('Enter duration time in format HH:MM = ')
        week_day = input('(OPTIONAL) Enter week day of starting time = ')
        print(add_time(start_time,duration_time,week_day))
    else:
        print(add_time('12:33 AM','20:27','wednesday'))
        print(add_time('01:45 PM','146:02','sunday'))
        print(add_time('04:09 PM','14:51'))
        print(add_time('12:00 AM','37:26'))
        print(add_time('08:59 AM','01:30','monday'))