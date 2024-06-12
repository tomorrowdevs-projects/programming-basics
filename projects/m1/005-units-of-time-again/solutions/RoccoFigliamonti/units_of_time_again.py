""" UNITS OF TIME (AGAIN)
In this exercise you will reverse the process described in Exercise 24. 
Develop a program that begins by reading a number of seconds from the user. 
Then your program should display the equivalent amount of time in the form D:HH:MM:SS,
where D, HH, MM, and SS represent days, hours, minutes and seconds respectively. 

The hours, minutes and seconds should all be formatted so that they occupy exactly two digits. 

Use your research skills determine what additional character needs to be included in the format
specifier so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.
"""

total_amount=int(input("insert the total number of seconds: "))

seconds_in_day = 60*60*24 #86400 seconds in 1 day
seconds_in_hours = 60*60  #3600 seconds in 1 hour
seconds_in_minutes= 60    #60 seconds in 1 minutes  

days = total_amount//seconds_in_day #86400 seconds in 1 day
hours = (total_amount-days*seconds_in_day)//seconds_in_hours #3600 seconds in 1 hour
minutes = (total_amount-days*seconds_in_day-hours*seconds_in_hours)//seconds_in_minutes
seconds= total_amount-days*seconds_in_day-hours*seconds_in_hours-minutes*seconds_in_minutes

print(f"Your total time is {days:02d}:{hours:02d}:{minutes:02d}:{seconds:02d}")

