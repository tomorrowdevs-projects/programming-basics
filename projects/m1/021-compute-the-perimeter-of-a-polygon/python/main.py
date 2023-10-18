
from math import sqrt, exp2

points = {}
x = 0
y = 0
i = 1
perimeter = 0

print("\n\t*** Perimeter of a Polygon ***\n")

def calc_distance(x1, y1, x2, y2):
    return sqrt((x1-x2)**2 + (y1-y2)**2)

x = float(input("\nEnter the first x-coordinate: "))
y = float(input("Enter the first y-coordinate: "))
print()

points[f'p_{i}'] = {'x': x, 'y': y}

while True:
    
    x = input("Enter the next x-coordinate (blank to quit): ")

    if x == '':
        break

    i += 1
    x = float(x)
    y = float(input("Enter the next y-coordinate: "))
    print()
    points[f'p_{i}'] = {'x': x, 'y': y}
    perimeter += calc_distance(points[f'p_{i-1}']['x'], points[f'p_{i-1}']['y'], points[f'p_{i}']['x'], points[f'p_{i}']['y'])
    
if points['p_1'] == points[f'p_{i}']:
    i -= 1

perimeter += calc_distance(points['p_1']['x'], points['p_1']['y'], points[f'p_{i}']['x'], points[f'p_{i}']['y'])

print(f"\nThis poligon have {i} sides and his perimeter equal to {perimeter}.\n")