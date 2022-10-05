def add_time(time, add, day=0):
    days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
    if isinstance(day,str):
        day = day.lower()
    add_day = ''
    change_sun = 0
    counter = 0
    base = time.split(' ')
    base_time = base[0].split(':')
    adder = add.split(':')
    final_hour = int(base_time[0]) + int(adder[0])
    final_min = int(base_time[1]) + int(adder[1])
    # while loop for convert the minutes in hour 
    while final_min > 59:
        final_min -= 60
        final_hour += 1
    while final_hour > 12:
        final_hour -= 12
        change_sun += 1
    #in case change date at 12am 
    if final_hour == 12:
        change_sun += 1
    # if condition for determinate how much days 
    if change_sun > 0:
        if base[1] == 'PM' and change_sun == 1 or base[1] == 'AM' and 4 > change_sun > 1:
            add_day = '(next day)'
            counter = 1
        elif base[1] == 'PM':
            add_day = f"({int((change_sun + 1) / 2)} days later)"
            counter += int((change_sun + 1) / 2)
        elif base[1] == 'AM' and change_sun > 1:
            add_day = f"({int(change_sun / 2)} days later)"
            counter += int(change_sun / 2)
    # if condition for determinate if am or pm
    if change_sun % 2 != 0:
        if base[1] == 'AM':
            base[1] = 'PM'
        else:
            base[1] = 'AM'
    if day in days:
        start = days.index(day)
    #due i setted the add_day as a of the output i have to use another variable
        end = start + counter
        while end > 6:
            end -= 7
        day = days[end]
        if counter == 0:
            return f"{final_hour:02d}:{final_min:02d} {base[1]} {day.capitalize()}"
        else:
            return f"{final_hour:02d}:{final_min:02d} {base[1]} {day.capitalize()} {add_day}"
    else:
        only_time = f"{final_hour:02d}:{final_min:02d} {base[1]} {add_day}"

    return only_time

def main():
    # base_time = input('Enter the base time (form: hh:mm am/pm): ').upper()
    # to_add = input('Enter the time to add (form: hh:mm): ')
    # start_day = input('Enter the day (Optional):').lower()
    # print(add_time(base_time, to_add , start_day))
    print(add_time("3:00 PM", "3:10"))
    print(add_time("11:30 AM", "2:32", "Monday"))
    print(add_time("11:43 AM", "00:20"))
    print(add_time("10:10 PM", "3:30"))
    print(add_time("11:43 PM", "24:20", "tueSday"))
    print(add_time("6:30 PM", "205:12"))
if __name__ == '__main__':
    main()