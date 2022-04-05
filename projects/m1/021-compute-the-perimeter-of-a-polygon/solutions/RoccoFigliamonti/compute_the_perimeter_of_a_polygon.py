"""# Compute the Perimeter of a Polygon

Write a program that computes the perimeter of a polygon.
Begin by reading the x and y coordinates for the first point on the perimeter of the polygon from the user.
Then continue reading pairs of values until the user enters a blank line for the x-coordinate.

Each time you read an additional coordinate you should compute the distance to the previous point
and add it to the perimeter.

When a blank line is entered for the x-coordinate
your program should add the distance from the last point back to the first point to the perimeter.

Then the perimeter should be displayed. Sample input and output values are shown below.
The input values entered by the user are shown in bold.
"""
from math import sqrt
coord_x = []
coord_y = []

#take the input
while True:
    x = input("Insert the x coordinate: ")
    if x == "" :
        break
    y = input("Insert the y coordinate: ")
    coord_x.append(x)
    coord_y.append(y)

#transform input in a list of integer
int_coord_x = []
int_coord_y = []
for elx in coord_x:
    int_coord_x.append(int(elx))
for ely in coord_y:
    int_coord_y.append(int(ely))

#sum of each polygon side excluding last
perimeter = 0
for i in range(len(int_coord_x)-1):
    perimeter = perimeter + sqrt((int_coord_x[i+1]-int_coord_x[i])**2 + (int_coord_y[i+1]-int_coord_y[i])**2)

#sum of the last polygon side (last coord - first coord)
perimeter = perimeter + sqrt((int_coord_x[-1]-int_coord_x[0])**2 + (int_coord_y[-1]-int_coord_y[0])**2)

print(f"The perimeter of that polygon is: {perimeter}")