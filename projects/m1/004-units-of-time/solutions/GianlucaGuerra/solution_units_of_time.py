#counter from start a session on PC
#number of days-hours-minutes-seconds
print ("Please insert the amount of: ")
a=int(input("Days: "))
b=int(input("Hours: "))
c=int(input("Minutes: "))
d=int(input("Seconds: "))
total= (a*86400)+(b*3600)+(c*60)+(d) 
print("Total of your time in seconds is: " + str(total))