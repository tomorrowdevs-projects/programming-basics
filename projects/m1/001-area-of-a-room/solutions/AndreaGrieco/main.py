#AREA OF A ROOM
#Write a program that asks the user to enter the width and length of a room. 
#Once these values have been read, your program should compute and display 
#the area of the room. The length and the width will be entered as 
#floating-point numbers. Include units in your prompt and output message; 
#either feet or meters, depending on which unit you are more comfortable 
#working with.

import math

width = float(input("insert the width of the room: "))
lenght = float(input("insert the lenght of the room: "))

print("the area of the room is: "+str(round(width*lenght,2)))