# UNITS OF TIME by Francesco Ricci
# refactoring messaggi output

total_day =  int(input("Enter total days: "))
total_hour = int(input("Enter total hours: "))
total_minutes = int(input('Enter total minutes: ' ))

total_day_in_second = total_day * 86400
total_hour_in_second = int(total_hour * 3600)
total_minutes_in_second =  int(total_minutes * 60)

total_in_second = int(total_day_in_second + total_hour_in_second + total_minutes_in_second)

print ('The total duration is: ' +  str(total_in_second) + " seconds")