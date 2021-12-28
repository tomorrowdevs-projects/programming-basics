# In this exercise you will reverse the process described in Exercise 24. 
# Develop a program that begins by reading a number of seconds from the user. 
# Then your program should display the equivalent amount of time in the form D:HH:MM:SS, 
# where D, HH, MM, and SS represent days, hours, minutes and seconds respectively. 
# The hours, minutes and seconds should all be formatted so that they occupy exactly two digits. 
# Use your research skills to determine what additional character needs to be included in the format specifier 
# so that leading zeros are used instead of leading spaces when a number is formatted to a particular width.

totsec = int(input("Insert total seconds: "))


def risolve(totsec):
    D = str(totsec // (60*60*24))
    Dr = totsec % (60*60*24)
    H = str(Dr // (60*60))
    Hr = Dr % (60*60)
    M = str(Hr // 60)
    Mr = str(Hr % 60)
    print( D.zfill(2) + ":" + H.zfill(2) + ":" + M.zfill(2) + ":" + Mr.zfill(2))
   
risolve(totsec)

