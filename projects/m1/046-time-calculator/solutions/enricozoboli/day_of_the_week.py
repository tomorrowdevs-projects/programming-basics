def what_day(days, day_of_the_week):
    new_day = ""
    day_of_the_week = day_of_the_week.lower()
    if day_of_the_week == "monday":
        new_day = (1 + days) % 7
    elif day_of_the_week == "tuesday":
        new_day = (2 + days) % 7
    elif day_of_the_week == "wednesday":
        new_day = (3 + days) % 7
    elif day_of_the_week == "thursday":
        new_day = (4 + days) % 7
    elif day_of_the_week == "friday":
        new_day = (5 + days) % 7
    elif day_of_the_week == "saturday":
        new_day = (6 + days) % 7
    elif day_of_the_week == "sunday":
        new_day = (7 + days) % 7
    
    if new_day:
        if new_day == 1:
            next_day = "Monday"
            return next_day
        if new_day == 2:
            next_day = "Tuesday"
            return next_day
        if new_day == 3:
            next_day = "Wednesday"
            return next_day
        if new_day == 4:
            next_day = "Thursday"
            return next_day
        if new_day == 5:
            next_day = "Friday"
            return next_day
        if new_day == 6:
            next_day = "Saturday"
            return next_day
        if new_day == 7:
            next_day = "Sunday"
            return next_day