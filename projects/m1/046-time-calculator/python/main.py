def add_time(start_time,add_time,day_of_week=""):
    start_hour = int(start_time[:-6])
    start_minute = int(start_time[-5:-3])
    add_hour = int(add_time[:-3])
    add_minute = int(add_time[-2:])
    am_or_pm = start_time[-2:]
    days_later = 0

    final_minute = start_minute + add_minute    #ottengo le ore totali
    if final_minute >= 60:
        add_hour += 1
        final_minute = final_minute % 60

    final_hour = start_hour + add_hour    #ottengo i minuti totali
    if final_hour >= 12:
        days_later = final_hour // 24
        final_hour = final_hour % 12
        if final_hour == 0:
            final_hour = 12
        if am_or_pm == "AM":    #conversione da AM a PM o viceversa
            am_or_pm = "PM"
        else:
            am_or_pm = "AM"
            days_later += 1
    
    week = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]    #scelta giorno della settimana se inserito
    if day_of_week.lower() in week:
        index = week.index(day_of_week.lower())
        index = (index + days_later) % 7
        day_of_week = week[index]
        day_of_week = ", {}" .format(day_of_week.capitalize())
    else:
        day_of_week = ""

    if days_later == 0:    #scelta giorni successivi se presenti
        days_later = ""
    elif days_later == 1:
        days_later = "(next day)"
    else:
        days_later = "({} days later)" .format(days_later)

    result = f"{final_hour}:{final_minute:02d} {am_or_pm}{day_of_week} {days_later}"

    print(result)
        
if __name__ == '__main__':  
    add_time("3:00 PM", "3:10")    #esempi dati dall'esercizio per vedere se la funzione funge correttamente
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









    

    


