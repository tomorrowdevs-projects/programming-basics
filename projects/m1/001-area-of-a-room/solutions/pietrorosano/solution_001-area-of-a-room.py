# Write a program that asks the user to enter the width and length of a room. Once these values have been read, your program should compute and display the area of the room. The length and the width will be entered as floating-point numbers. Include units in your prompt and output message; either feet or meters, depending on which unit you are more comfortable working with.
print("\nSTART PROGRAM")
print("------------------")
print("\nHi! Let's calculate your room's area! ")
print("Every value has to be in meters")
print("\nFirst of all, what's your room width?")
width_room = float(input())
print("\nAnd the length?")
length_room = float(input())
print("\nThanks! The area of your room is...")
area = width_room * length_room
print(str(format(area, ".2f"))+" mtq")