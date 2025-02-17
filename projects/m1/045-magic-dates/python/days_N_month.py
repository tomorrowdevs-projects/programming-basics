def how_much_days_month(month, year):
    months_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    days_in_month = months_days[month - 1]
    
    if month == 2:
        if year % 400 == 0:
            days_in_month += 1
        elif year % 100 == 0:
            pass
        elif year % 4 == 0:
            days_in_month += 1

    return days_in_month