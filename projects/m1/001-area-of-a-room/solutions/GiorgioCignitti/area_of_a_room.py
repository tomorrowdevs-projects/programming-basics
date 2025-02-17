#Write a program that asks the user to enter the width and length of a room. Once these values have been read, your program should compute and display the area of the room. The length and the width will be entered as floating-point numbers. Include units in your prompt and output message; either feet or meters, depending on which unit you are more comfortable working with.

print("Enter width and length")
width=float(input("Enter width in squared meters: "))
length=float(input("Enter length in squared meters: "))

print(f"Your area is {width*length} squared meters")




