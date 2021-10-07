SECONDS_IN_A_DAY = 86400
SECONDS_IN_AN_HOUR = 3600


number_of_seconds = int(input("Welcome!Insert the number of seconds: "))

# Compute the amount of days, hours, minute and seconds
days = number_of_seconds // SECONDS_IN_A_DAY
hours = (number_of_seconds % SECONDS_IN_A_DAY) // SECONDS_IN_AN_HOUR
minute = ((number_of_seconds % SECONDS_IN_A_DAY) % SECONDS_IN_AN_HOUR) // 60
seconds = (((number_of_seconds % SECONDS_IN_A_DAY) % SECONDS_IN_AN_HOUR)  
%  60) 
 
# Transform the result in strings
hours_str = str(hours)
minute_str = str(minute)
seconds_str = str(seconds)

# Formatted the date with the leading zeros
print(f"Your date is : {days}:{hours_str.zfill(2)}:{minute_str.zfill(2)}:"
f"{seconds_str.zfill(2)}")