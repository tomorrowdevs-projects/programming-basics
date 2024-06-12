# day = 86400 seconds
# hour = 3600 seconds
# minute = 60 seconds

total_seconds = int(input("Insert the total number of seconds: "))

days = total_seconds // 86400
hours = (total_seconds - days*86400) // 3600
minutes = (total_seconds- days*86400 - hours*3600) // 60
seconds = (total_seconds - days*86400 - hours*3600 - minutes*60) // 1

print("The equivalent amount of time in the form D:HH:MM:SS is %d:%d:%d:%d" % (days, hours, minutes, seconds))