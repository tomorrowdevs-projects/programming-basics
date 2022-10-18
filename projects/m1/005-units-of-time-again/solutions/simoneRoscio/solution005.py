# UNITS OF TIME (AGAIN)

# In this exercise you will reverse the process described in Exercise 24. 
# Develop a program that begins by reading a number of seconds from the user. 
# Then your program should display the equivalent amount of time in the form D:HH:MM:SS, 
# where D, HH, MM, and SS represent days, hours, minutes and seconds respectively. 
# The hours, minutes and seconds should all be formatted so that they occupy exactly two digits. 
# Use your research skills determine what additional character needs to be included in the format specifier so 
# that leading zeros are used instead of leading spaces when a number is formatted to a particular width.


print('This script will convert a number of seconds in the form D:HH:MM:SS')
seconds = int(input('How much seconds you want to convert?'))

# timeUnit
day = 86400
hour = 3600
minute = 60

# calculating how much timeUnit we have into seconds

if seconds >= day:
    sInDays = seconds // day
    seconds = seconds % day
else:
    sInDays = 0

if seconds >= hour:
    sInHours = seconds // hour
    seconds = seconds % hour
else:
    sInHours = 0
    

if seconds >= minute:
    sInMinutes = seconds // minute
    seconds = seconds % minute
else:
    sInMinutes = 0

print('the time converted in D:HH:MM:SS is: ', sInDays, ':', f"{sInHours:02}", ':', f"{sInMinutes:02}", ':', f"{seconds:02}", sep = '')