seconds = float(input('Hi! Please insert the number of seconds here: '))

days = (seconds /86400) % 24
hours = (seconds / 3600) % 60
minutes = (seconds / 60) % 60
seconds_2 = seconds % 60

#i tried to make these as strings but it didn't work
#days_lit = str(days)
#hours_lit = str(hours)
#minutes_lit = str(minutes)

#i then tried to use %d, which is the fromatting code to print an intended integer number and it worked.

print("your amount is: " "%02d" %days + " days, " + "%02d" %hours + " hours, " + "%02d" %minutes + " minutes and " + "%02d" %seconds_2 + " seconds.")

