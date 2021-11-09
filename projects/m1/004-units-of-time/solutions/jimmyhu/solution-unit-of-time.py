days = int(input("please insert number of days "))
hours = int(input("please insert hour "))
minutes = int(input("please insert minutes "))
seconds = int(input("please insert seconds "))
minute_seconds = minutes * 60
hours_seconds = (hours * 60) * 60
days_seconds = ((days * 24) * 60) * 60 
total = str(minute_seconds + hours_seconds + days_seconds + seconds)
print("total in seconds: " + total)