import math

# Read the coordinates of the first point
x1 = float(input("Enter the first x-coordinate: "))
y1 = float(input("Enter the first y-coordinate: "))

# Initialize variables for the previous point and the perimeter
x_prev = x1
y_prev = y1
perimeter = 0

# Read the coordinates of the next point
x2_str = input("Enter the next x-coordinate (blank to quit): ")

while x2_str != "":
    # Convert the input string to a float
    x2 = float(x2_str)
    y2 = float(input("Enter the next y-coordinate: "))

    # Compute the distance to the previous point and add it to the perimeter
    distance = math.sqrt((x2 - x_prev)**2 + (y2 - y_prev)**2)
    perimeter += distance

    # Save the current point as the previous point
    x_prev = x2
    y_prev = y2

    # Read the coordinates of the next point
    x2_str = input("Enter the next x-coordinate (blank to quit): ")

# Compute the distance from the last point back to the first point and add it to the perimeter
distance = math.sqrt((x1 - x_prev)**2 + (y1 - y_prev)**2)
perimeter += distance

# Display the perimeter
print("The perimeter of that polygon is", perimeter)


