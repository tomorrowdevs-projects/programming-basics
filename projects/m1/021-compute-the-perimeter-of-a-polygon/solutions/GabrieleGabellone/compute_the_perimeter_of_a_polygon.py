#Compute the Perimeter of a Polygon
import math
first_x = int(input("Enter the first x-coordinate: "))
first_y = int(input("Enter the first y-coordinate: "))
previous_x, previous_y = first_x, first_y
perimeter = 0
while True:
    next_x = input("Enter the next x-coordinate (blank to quit): ")
    if len(next_x) == 0: 
        distance = math.sqrt((previous_x - first_x)**2 + (previous_y - first_y)**2)
        perimeter = distance + perimeter
        break
    else: 
        next_x = int(next_x)
        next_y = int(input("Enter the next y-coordinate (blank to quit): "))
        distance = math.sqrt((next_x - previous_x)**2 + (next_y - previous_y)**2)
        perimeter = distance + perimeter
        previous_x, previous_y = next_x, next_y
print("The perimeter of that polygon is", perimeter)