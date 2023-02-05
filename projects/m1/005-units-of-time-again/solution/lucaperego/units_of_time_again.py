#In this exercise you will reverse the process described in Exercise 24.
#Develop a program that begins by reading a number of seconds from the user.
#Then your program should display the equivalent amount of time in the form D:HH:MM:SS, where D, HH, MM, and SS represent days, hours, minutes and seconds respectively.
#The hours, minutes and seconds should all be formatted so that they occupy exactly two digits.
#Use your research skills determine what additional character needs to be included in the format specifier so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.

seconds = int(input("Nunmber of Seconds that have to be convert ---> "))

Days = int(seconds / 86400)

Hours = int(int(seconds % 86400) / 3600)

Minutes = int(int(seconds % 86400) % 3600) / 60

print(f"From {seconds} you can obtain: {Days} Days --- {Hours} Hours --- {Minutes} Minutes")