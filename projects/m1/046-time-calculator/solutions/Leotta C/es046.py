def change_period(period):
    if period.upper() == "AM":
        return "PM"
    if period.upper() == "PM":
        return "AM"

def add_time(start, duration, day):
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    new_day = day
    time = start.split(sep=" ")
    period = time[1].upper()            #indica se è AM o PM
    clock = time[0].split(sep=":")      #indica l'orario
    passed_time = duration.split(sep=":")
    hours = int(clock[0]) + int(passed_time[0])
    minutes = int(clock[1]) + int(passed_time[1])
    number_of_period = 0
    if minutes >= 60:
        minutes %= 60
        hours += 1
    if hours > 12:
        number_of_period = hours // 12
        new_hour = hours % 12
    if number_of_period % 2 == 0:
        new_period = period
    else:
        new_period = change_period(period)
    passed_days = number_of_period // 2
    if period == "PM" and new_period == "AM":
        passed_days += 1
    if day == "":
        new_day = ""
    else:
        new_day = days[(days.index(day) + passed_days) % 7]
    if passed_days == 0:
       new_time = str(new_hour) + f":{minutes:02} " + new_period + "  " + new_day
    elif passed_days == 1:
       new_time = str(new_hour) + f":{minutes:02} " + new_period + "  " + new_day + f" (next day)"
    else:
       new_time = str(new_hour) + f":{minutes:02} " + new_period + "  " + new_day + f" ({passed_days} days later)"
    return new_time


if __name__ == '__main__':
    s = input("Enter a time (AM or PM): ")
    d = input("Enter a duration: ")
    dd = input("Enter a day: ").capitalize()

    print(add_time(s, d, dd))


