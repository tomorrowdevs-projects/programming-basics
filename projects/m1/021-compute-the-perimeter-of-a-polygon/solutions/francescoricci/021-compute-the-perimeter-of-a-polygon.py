#excercise m1/020 by francesco ricci
from math import sqrt

def computeLenght(x1,y1,x2,y2):
    return sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

def computePerimeter(number_sides):
    perimeter = 0
    for sides in range(1, number_sides + 1):
        print(f'\nInsert coordinate side {sides}')
        x1 = int(input('Insert coordinate x1: '))
        y1 = int(input('Insert coordinate y1: '))
        x2 = int(input('Insert coordinate x2: '))
        y2 = int(input('Insert coordinate y2: '))
        current_line = computeLenght(x1, y1, x2, y2)
        perimeter = perimeter + current_line

    print(f'perimeter: {perimeter}')

min_sides_polygon = 3
# number_sides = 4
number_sides = input('Insert number sides: ')
if number_sides.isdigit():
    if int(number_sides) >= min_sides_polygon:
        computePerimeter(int(number_sides))
    else:
        print('Insert a minim sides of polygon [3] ')
else:
    print('Insert numeric value')





