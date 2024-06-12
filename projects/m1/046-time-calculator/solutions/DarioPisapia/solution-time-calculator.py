days = {
    "monday": 1,
    "tuesday": 2,
    "wednesday": 3,
    "thursday": 4,
    "friday": 5,
    "saturday": 6,
    "sunday": 7
}

day_list = ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"]

#converte l'orario iniziale in minuti
def min_start(start):
    minutes = int(start[-5:-3])
    hours = int(start[:-6])
    minutes = hours * 60 + minutes
    if "PM" in start:
        minutes += 12 * 60
    return minutes

#converte i minuti in ora corretta del giorno   
def to_hour(minutes):
    h = minutes // 60
    m = minutes % 60
    if h < 12:
        if h == 0:
            h += 12
        return f"{h}:{m:02d} AM"
    else:
        h -= 12
        if h == 0:
            h += 12
        return f"{h}:{m:02d} PM"

def add_time(start, ending, day = None):
    if day:
        day = day.lower()
    start = min_start(start)

    #converto in minuti l'ending
    end = int(ending[-2:]) + int(ending[:-3]) * 60 

    to_end_day = 1440 - start 

    total_minutes = start + end

    #controllo se rimane nel giorno stesso
    if end < to_end_day:
        time = to_hour(total_minutes)
        if day == None:
            return time
        else:
            f"{time}, {day}"
    #altrimenti conto in che giorno va a finire
    else:
        n_days = total_minutes//1440
        time = to_hour(total_minutes%1440)
        if n_days == 1:
            later = "next day"
        else:
            later = f"({n_days} days later)"
        if day == None:
            return f"{time} {later}"
        else:
            new_day = (days[day] + n_days)%7
            day = day_list[new_day-1]
            return f"{time}, {day} {later}"
            
if __name__ == "__main__":
    time_input = input("Insert the current time (HH:MM AM/PM):\n")
    adding = input("Insert the time to add (HH:MM:\n")
    day_or_not = input("Do you want to add the day of today? (Y/N):\n")
    if day_or_not == "N":
        print(add_time(time_input, adding))
    else:
        day = input("Digit the day:\n")
        print(add_time(time_input, adding, day))
