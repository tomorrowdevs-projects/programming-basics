seconds = int(input("Please insert seconds:\n"))

def calc_days(seconds):
        days = seconds // 86400
        days_rest = seconds % 86400
        hours_1 = days_rest // 3600
        hours_rest_1 = days_rest % 3600
        minute_1 = hours_rest_1 // 60
        minute_rest_1 = hours_rest_1 % 60
        print("The amount of seconds you typed is equal to (D:HH:MM:SS):\n" + str(days).zfill(2) + ":" + str(hours_1).zfill(2) + ":" + str(minute_1).zfill(2) + ":" + str(minute_rest_1).zfill(2)) 
   
calc_days(seconds)


