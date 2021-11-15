import math
# Function to calculate the distance between two points
def distance(x1, y1, x2, y2):
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

# Ask the user for the coordinates of the first point
first_x = float(input('Enter the first x-coordinate: '))
first_y = float(input('Enter the first y-coordinate: '))
# Save first point coordinates values in a support variable
prev_x = first_x
prev_y = first_y
perimeter = 0

while True:
    # Ask the user for the x coordinate of the next point (breake the loop if x == '')
    next_x = input('Enter the next x-coordinate (blank to quit): ')
    if next_x == '':
        break
    # Cast next point coordinate to float and then ask the user for the y coordinate of the next point
    next_x = float(next_x)
    next_y = float(input('Enter the next y-coordinate: '))
    # Calculate the distance between previous point and the next. Add it to the perimeter
    d = distance(prev_x, prev_y, next_x, next_y)
    perimeter += d
    # Save the coordinates of the new point so that they are considered in the next cycle as previous coordinates
    prev_x = next_x
    prev_y = next_y
# Calculate the distance between last point and first point and add it to the perimeter
d = distance(prev_x, prev_y, first_x, first_y)
perimeter += d
# Display the result
print('The perimeter of that polygon is: ' + str(perimeter))

