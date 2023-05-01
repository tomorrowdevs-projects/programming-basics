import math

x1 = float(input(f"Enter the x-coordinate of the first point: "))
y1 = float(input(f"Enter the y-coordinate of the first point: "))
x2 = float(input(f"Enter the x-coordinate of the second point: "))
y2 = float(input(f"Enter the y-coordinate of the second point: "))
x3 = float(input(f"Enter the x-coordinate of the third point: "))
y3 = float(input(f"Enter the y-coordinate of the third point: "))

p1 = [x1, y1]
p2 = [x2, y2]
p3 = [x3, y3]
perimeter = math.dist(p1, p2) + math.dist(p2, p3)
p = p3

for i in range(4,100):
    x = input(f"Enter the x-coordinate of the n.{i} point: ")
    y = input(f"Enter the y-coordinate of the n.{i} point: ")
    if [x, y] != ["", ""]:
        q = [float(x), float(y)]
        distance = math.dist(p, q)
        perimeter = perimeter + distance
        p = q
    else:
        distance = math.dist(p, p1)
        perimeter = perimeter + distance
        break

print(f"The perimeter of this polygon is {perimeter}")

