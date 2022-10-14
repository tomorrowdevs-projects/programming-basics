# AREA OF A ROOM

# Write a program that asks the user to enter the width and length of a room. 
# Once these values have been read, your program should compute and display the area of the room. 
# The length and the width will be entered as floating-point numbers. 
# Include units in your prompt and output message; either feet or meters, depending on which unit you are more comfortable working with.


print ('Hello USER, this program will evaluate the area of a room for you!')


# Ask user for the width and the lenght of the room in meters

width = float(input('What is the width of the room in meters?'))

lenght = float(input('What is the lenght of the room in meters?'))


# Evaluete the area of the room

roomArea = width * lenght 


# Show to USER the evalueted area of the room

print ('The area of the room is', roomArea, 'squares meters!')