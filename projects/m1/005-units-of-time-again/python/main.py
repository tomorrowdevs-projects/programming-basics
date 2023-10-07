'''
# UNITS OF TIME (AGAIN)

In this exercise you will reverse the process described in Exercise 4.   
Develop a program that begins by reading a number of seconds from the user.   
Then your program should display the equivalent amount of time in the form D:HH:MM:SS,  
where D, HH, MM, and SS represent days, hours, minutes and seconds respectively.   
The hours, minutes and seconds should all be formatted so that they occupy exactly two digits.   
Use your research skills determine what additional character needs to be included in the format specifier
so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.

Example: 93397  = 1:01:56:37
'''

from datetime import datetime

print("\nHi folks! In this episode i've been asked to reverse the previous exercise.")
print("So please insert just amount of seconds and i will show you in how many days, hours, minutes and remaining seconds that amount is splitted.\n")

seconds = int(input("Insert here seconds: "))
minutes = int(seconds/60)
seconds = seconds%60
hours = int(minutes/60)
minutes = minutes%60
days = int(hours/24)
hours = hours%24

print(f"{days}:{hours:0>2}:{minutes:0>2}:{seconds:0>2}")