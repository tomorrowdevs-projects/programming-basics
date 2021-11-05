def time_extractor(start_time, added_time):
    
    start_hour = ""
    index = 0
    for item in start_time:
        if item != ":": 
            start_hour += item
            index += 1
        else:
            break
    start_minute = start_time[index+1:index+3]
    am_or_pm = start_time[index+4]
    
    added_hour = ""
    index_2 = 0
    for item in added_time:
        if item != ":": 
            added_hour += item
            index_2 += 1
        else:
            break
    added_minute = added_time[index_2+1:index_2+3]

    return start_hour, start_minute, added_hour, added_minute, am_or_pm



