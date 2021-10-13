#this program calculates the area of a room simply by reading from the user a width and a length
#I suppose that the room is a rectangle, seen that it is required to ask a width and a length
print("This program calculates the area of a room.")
w=input("Please enter the width of the room, in meter:")
l=input("Please enter the length of the room, in meter:")
#now I convert the string input with a float function
#I will re-assign the float value to the same variable
w=float(w)
l=float(l)
#in the print function, I do the multiplication
print("The area of the room is:", w*l,"squared meters.")
