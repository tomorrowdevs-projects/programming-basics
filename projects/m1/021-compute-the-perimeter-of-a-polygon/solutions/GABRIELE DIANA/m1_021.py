# Compute the Perimeter of a Polygon

# Write a program that computes the perimeter of a polygon. 
# Begin by reading the x and y coordinates for the first point on the perimeter of the polygon from the user. 
# Then continue reading pairs of values until the user enters a blank line for the x-coordinate. 
# Each time you read an additional coordinate
# you should compute the distance to the previous point and add it to the perimeter.
# When a blank line is entered for the x-coordinate your program should add 
# the distance from the last point back to the first point to the perimeter. 
# Then the perimeter should be displayed. Sample input and output values are shown below. 
# The input values entered by the user are shown in bold.


# Enter the first x-coordinate: 0
# Enter the first y-coordinate: 0
# Enter the next x-coordinate (blank to quit): 1 Enter the next y-coordinate: 0
# Enter the next x-coordinate (blank to quit): 0 Enter the next y-coordinate: 1
# Enter the next x-coordinate (blank to quit):
# The perimeter of that polygon is 3.414213562373095


# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **2 hours**
import math


# I create a function that calculates the hypotenuse through Pitagora's theorem.
def ipo(a, b):
    return math.sqrt(math.pow(a, 2) + math.pow(b, 2))


x = input("Enter the first x-coordinate: ")


if x == "":
    print("Error")
    quit()
# include input x in an array. do the same for input y. it's coming handy later
x_coord = [x]

y = input("Enter the first y-coordinate: ")

y_coord = [y]

x1 = input("Enter the next x-coordinate: ")


if x1 == "":
    print("Error")
    quit()


y1 = input("Enter the next y-coordinate: ")
# create an empty array for perimeter. this will be filled up by the while cycle.
perimeter = []


while x1 != "":
    x_coord.append(x1)  # include x and y second inputs in previous arrays. this allows operations by index
    y_coord.append(y1)
    delta_x = int(x_coord[-1]) - int(x_coord[-2])
    delta_y = int(y_coord[-1]) - int(y_coord[-2])
    perimeter.append(ipo(delta_y, delta_x))  # fill up perimeter array with the ipo function result
    x1 = input("Enter the next x-coordinate(blank to quit): ")
    if x1 == "":  # defines "blank to quit"
        break
    y1 = input("Enter the next y-coordinate: ")

# assign new value to delta variables to calculate distance from the last and first entries in coordinates.
delta_x = int(x_coord[-1]) - int(x_coord[-0])
delta_y = int(y_coord[-1]) - int(y_coord[-0])

perimeter.append(ipo(delta_y, delta_x))

print("The perimeter of the polygon is {}".format(sum(perimeter)))
