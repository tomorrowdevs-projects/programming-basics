# In this exercise you will reverse the process described in Exercise 24. Develop a program that begins by reading a number of seconds from the user. Then your program should display the equivalent amount of time in the form D:HH:MM:SS, where D, HH, MM, and SS represent days, hours, minutes and seconds respectively. The hours, minutes and seconds should all be formatted so that they occupy exactly two digits. Use your research skills determine what additional character needs to be included in the format specifier so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.
print("\nSTART PROGRAM")
print("------------------")
print("\nDays")
days = int(input())
print("\nHours")
hours = int(input())
print("\nMinutes")
minutes = int(input())
print("\nSeconds")
seconds = int(input())
print("\nTime...")
# print(str(days)+":"+str(hours)+":"+str(minutes)+":"+str(seconds))
print("{:02d}:{:02d}:{:02d}:{:02d}".format(days, hours, minutes, seconds))