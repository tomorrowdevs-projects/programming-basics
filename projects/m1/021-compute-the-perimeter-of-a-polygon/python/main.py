import math

def compute_distance(x1, y1, x2, y2):
    return math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

x_prev = float(input("Enter the first x-coordinate: "))
y_prev = float(input("Enter the first y-coordinate: "))

x_start = x_prev
y_start = y_prev
perimeter = 0

while True: 
    x = input("Enter the second x-coordinate (blank to quit): ")
    if x == "":
        perimeter += compute_distance(x_prev, y_prev, x_start, y_start)
        break
    
    x = float(x)
    y = float(input("Enter the second y-coordinate: "))
    
    distance = compute_distance(x_prev, y_prev, x, y)
    perimeter += distance

    x_prev = x
    y_prev = y

print(perimeter)
