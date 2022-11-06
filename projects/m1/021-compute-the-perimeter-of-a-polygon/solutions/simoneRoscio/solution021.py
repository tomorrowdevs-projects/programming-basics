"""Write a program that computes the perimeter of a polygon. 
Begin by reading the x and y coordinates for the first point on the perimeter of the polygon from the user. 
Then continue reading pairs of values until the user enters a blank line for the x-coordinate. 
Each time you read an additional coordinate you should compute the distance to the previous point and add it to the perimeter. 
When a blank line is entered for the x-coordinate 
your program should add the distance from the last point back to the first point to the perimeter. 
Then the perimeter should be displayed. Sample input and output values are shown below. 

The input values entered by the user are shown in bold.

```
Enter the first x-coordinate: 0
Enter the first y-coordinate: 0
Enter the next x-coordinate (blank to quit): 1 Enter the next y-coordinate: 0
Enter the next x-coordinate (blank to quit): 0 Enter the next y-coordinate: 1
Enter the next x-coordinate (blank to quit):
The perimeter of that polygon is 3.414213562373095
```
"""
import math

origin_x = int(input('Enter the first x-coordinate: '))
origin_y = int(input('Enter the first y-coordinate: '))

# Empty list for the segment lenght
lenght_list = []

while True:

    x2 = input('Enter the next x-coordinate (blank to quit): ')
    
    # If the user input a blank to quit, evaluete distance beetween the last point (x1, y1) and the first point (first_x1, first y1 )
    if x2 == '':
        lenght = math.sqrt(((x1 - origin_x) **2) + ((y1 - origin_y)) **2)

        lenght_list.append(lenght)
        perimeter = sum(lenght_list)
        print(f' the perimeter of your polygon is {perimeter}')

        break

    # assign x1 and y1 to the first input just for the first cycle 
    if lenght_list == []:
        x1 = origin_x
        y1 = origin_y
    
    # Convert 'x2' to int after the "blank to quit" ceck
    x2 = int(x2)
    y2 = int(input('Enter the next y-coordinate: '))

    # Distance formula beetween two points (x1, y1 -> x2, y2)
    lenght = math.sqrt(((x2 - x1) **2) + ((y2 - y1)) **2)
    lenght_list.append(lenght)

    # assign the the starting point to the last point inserted to permit new a cycle 
    x1 = x2
    y1 = y2

    
    
    