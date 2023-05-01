"""
Write a program that computes the perimeter of a polygon.
Begin by reading the x and y coordinates for the first point on the perimeter of the polygon
from the user.
Then continue reading pairs of values until the user enters a blank line for the x-coordinate.
Each time you read an additional coordinate you should compute the distance to the previous point
and add it to the perimeter. When a blank line is entered for the x-coordinate your program should
add the distance from the last point back to the first point to the perimeter.
Then the perimeter should be displayed.
Sample input and output values are shown below.
The input values entered by the user are shown in bold.

```
Enter the first x-coordinate: 0
Enter the first y-coordinate: 0
Enter the next x-coordinate (blank to quit): 1 Enter the next y-coordinate: 0
Enter the next x-coordinate (blank to quit): 0 Enter the next y-coordinate: 1
Enter the next x-coordinate (blank to quit):
The perimeter of that polygon is 3.414213562373095

"""
import math
#trattandosi di un poligono, almeno tre coordinate devono essere inserite
x=int(input("Enter the first x-coordinate:"))
y=int(input("Enter the first y-coordinate:"))
x1 = int(input("Enter the next x-coordinate (blank to quit):"))
y1 = int(input("Enter the next y-coordinate (blank to quit):"))
p=math.sqrt((x-x1)**2+(y-y1)**2)
x2 = int(input("Enter the next x-coordinate (blank to quit):"))
y2 = int(input("Enter the next y-coordinate (blank to quit):"))

while str(x2):
    d = math.sqrt((x1-x2)**2+(y1-y2)**2)
    p+=d
    x1 = x2
    y1 = y2
    s = input("Enter the next x-coordinate (blank to quit):")
    if s=="":
        break
    else:
        x2=int(s)
        y2 = int(input("Enter the next y-coordinate (blank to quit):"))


p+=math.sqrt((x1-x)**2+(y1-y)**2)
print(p)
