seconds = int(input('insert your number of seconds'))

days = (seconds /86400) % 24
hours = (seconds / 3600) % 60
minutes = (seconds / 60) % 60
seconds_2 = seconds % 60


print("the amount is: " "%02d" %days + " days, " + "%02d" %hours + " hours, " + "%02d" %minutes + " minutes and " + "%02d" %seconds_2 + " seconds.")
