#units-of-time-again
#this program reads the number of seconds entered by the user and converts it into the format D:HH:MM:SS

D = MM = HH = SS = 0
seconds = int(input("Enter the number of seconds: "))
if seconds >= 86400:
    D = int(seconds / 86400)
    seconds = seconds % 3600
if seconds >= 3600:
    HH = int(seconds / 3600)
    seconds = seconds % 3600
if seconds >= 60:
    MM = int(seconds / 60)
    seconds = seconds % 60
if seconds >= 1:
    SS = int(seconds / 1)

time = "{:02}:{:02}:{:02}:{:02}"
print("This is the time in the format D:HH:MM:SS:")
print(time.format(D, HH, MM, SS))