import time_extractor
import day_of_the_week as dotw

def add_time(start_time, added_time, day_of_the_week=""):
    start_hour, start_minute, added_hour, added_minute, am_or_pm =( 
        time_extractor.time_extractor(start_time, added_time)
        )
    result_minute = (int(start_minute) + int(added_minute)) % 60
    carry_hour = (int(start_minute) + int(added_minute)) // 60
    
    if am_or_pm.upper() == "A":
        result_hour = (int(start_hour) +( 
            int(added_hour) + carry_hour) % 24
            )
        days = (int(start_hour) + int(added_hour) + carry_hour) // 24
    else :
        result_hour = (int(start_hour) + (
            int(added_hour) + carry_hour + 12) % 24
            )
        days = (int(start_hour) + int(added_hour) + carry_hour + 12) // 24

    if result_hour == 0:
        result_hour = 12
        next_am_pm = "AM"
    elif result_hour > 12:
        result_hour -= 12
        next_am_pm = "PM"
    else:
        next_am_pm = "AM"   

    if days == 0:
        day = ""
    elif days == 1:
        day= "(next day)"
    else:
        day = f"({days} days later)"

    if day_of_the_week:
        next_day = dotw.what_day(days, day_of_the_week)
    else:
        next_day=""

    return print(f"{result_hour}:{result_minute:02d} {next_am_pm}"
    f" {next_day} {day} ")

if __name__ == "__main__":
    add_time("10:10 PM", "3:30")
    add_time("6:30 PM", "205:12")
    add_time("11:30 AM", "2:32", "Monday")
    add_time("3:00 PM", "3:10")
    add_time("11:43 PM", "24:20", "tueSday")