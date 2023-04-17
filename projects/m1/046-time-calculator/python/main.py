time_str = input("Enter a time in 12 h format: ")
duration_str = input("Enter a duration time in hh:mm format: ")

# Parse the given time string
time_parts = time_str.split()
hour_str, minute_str = time_parts[0].split(':')

hour = int(hour_str)
minute = int(minute_str)
is_pm = time_parts[1] == 'PM'
is_am = time_parts[1] == 'AM'
    
# Parse the duration time string
duration_parts = duration_str.split(':')
duration_hour = int(duration_parts[0])
duration_minute = int(duration_parts[1])
    
new_hour = hour + duration_hour
new_minute = minute + duration_minute
print(new_minute)
print(duration_minute)
#compute hour 
if new_hour > 12:
    calc_hour = new_hour - hour
elif new_hour <= 12:
    calc_hour = new_hour
    
#compute minute
if new_minute > 59:
    calc_minute = minute - duration_minute
elif new_minute < 59:
    calc_minute = new_minute
print(calc_minute)