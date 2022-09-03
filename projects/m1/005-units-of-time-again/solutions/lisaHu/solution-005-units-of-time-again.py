#In this exercise you will reverse the process described in Exercise 24. 
#Develop a program that begins by reading a number of seconds from the user. 
#Then your program should display the equivalent amount of time in the form D:HH:MM:SS, where D, HH, MM, and SS represent days, hours, minutes and seconds respectively. 
#The hours, minutes and seconds should all be formatted so that they occupy exactly two digits. 
#Use your research skills determine what additional character needs to be included in the format specifier so that leading zeros are used #instead of leading spaces when a number is formatted to a particular width.





secondsInput = int(input("Enter number of seconds: "))


dayUnit = 86400
convertedDays = int(secondsInput) / dayUnit
secondsLeft = int(secondsInput) % dayUnit

hourUnit = 3600
convertedHours = int(secondsLeft) / hourUnit
secondsLeft = int(secondsLeft) % hourUnit

minuteUnit = 60
convertedMinutes = int(secondsLeft) / minuteUnit
secondsLeft = int(secondsLeft) % minuteUnit

convertedSeconds = secondsLeft

print("Days Hours Min Sec")
print(f"{int(convertedDays):02}" + " : " + f"{int(convertedHours):02}" + " : " + f"{int(convertedMinutes):02}" + " : " + f"{int(convertedSeconds):02}")