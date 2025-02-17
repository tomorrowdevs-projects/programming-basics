#ask to user how many seconds in order to perform computatio
seconds = int(input("Please insert seconds:\n"))

# divide seconds to obtain the total amount of days, hour, minute, and seconds
days = seconds // 86400
days_rest = seconds % 86400
hours_1 = days_rest // 3600
hours_rest_1 = days_rest % 3600
minute_1 = hours_rest_1 // 60
minute_rest_1 = hours_rest_1 % 60

# print on screen the result adding a zero on the left if needed 
print("The amount of seconds you typed is equal to (D:HH:MM:SS):\n" + str(days).zfill(2) + ":" + str(hours_1).zfill(2) + ":" + str(minute_1).zfill(2) + ":" + str(minute_rest_1).zfill(2))
