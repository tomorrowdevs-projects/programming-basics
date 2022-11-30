def add_time(start_time, addTime, day = 'a day name!'):

    # split time
    splitted_time = start_time.split(' ')
    spltd_time_again = splitted_time[0].split(':')
    splitd_add = addTime.split(':')
    meridian_time = splitted_time[1]
    if day != 'a day name!':
        day = day.lower().capitalize()

    start_hour = int(spltd_time_again[0])
    start_min = int(spltd_time_again[1])
    add_hour = int(splitd_add[0])
    add_min = int(splitd_add[1])

    day_counter = 0

    # adding time
    end_min = start_min + add_min

    if end_min >= 60:
        add_hour += (end_min // 60)
        end_min = end_min % 60

    end_hour = start_hour + add_hour

    # swap between AM and PM nested if needed to avoid the lose of the number 12
    if end_hour >= 12:
        end_hour = end_hour % 12
        if end_hour == 0:
            end_hour = 12
        if meridian_time == 'AM':
            meridian_time = 'PM'
        else:
            meridian_time = 'AM'
            day_counter = 1

    # print how much days elapsed
    if add_hour >= 24:
        day_counter += add_hour // 24

    if day == 'a day name!' and (day_counter == 0):
        end_time = f'{end_hour}:{end_min:02} {meridian_time}'
    elif (day == 'a day name!') and (day_counter == 1):
        end_time = f'{end_hour}:{end_min:02} {meridian_time} (next day)'
    elif (day == 'a day name!') and (day_counter > 1):
        end_time = f'{end_hour}:{end_min:02} {meridian_time} ({day_counter} days later)'
    else:
        end_time = f'{end_hour}:{end_min:02} {meridian_time}, {day}'
        
    days_list = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if day in days_list and day_counter > 1:
        index = days_list.index(day) + day_counter
        day = days_list[index]
        end_time = f'{end_hour}:{end_min:02} {meridian_time} {day} ({day_counter} days later)'

    print(end_time)


add_time("3:00 PM", "3:10")
# Returns: 6:10 PM

add_time("11:30 AM", "2:32", "Monday")
# Returns: 2:02 PM, Monday

add_time("11:43 AM", "00:20")
# Returns: 12:03 PM

add_time("10:10 PM", "3:30")
# Returns: 1:40 AM (next day)

add_time("11:43 PM", "24:20", "tueSday")
# Returns: 12:03 AM, Thursday (2 days later)

add_time("6:30 PM", "205:12")
# Returns: 7:42 AM (9 days later)