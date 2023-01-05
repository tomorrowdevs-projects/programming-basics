import math

duration = int(input("Insert a duration in seconds "))

days = math.trunc(duration / 86400)
#print(days)
duration = duration % 86400

hours = math.trunc( duration / 3600)
#print (hours)
duration = duration % 3600

minutes = math.trunc( duration / 60)
#print(minutes)

duration = duration % 60
#print (duration)

print("The equivalent of your duration in D:HH:MM:SS is", end=" ")
print(days,"{:02d}".format(hours),"{:02d}".format(minutes),"{:02d}".format(duration), sep=":")