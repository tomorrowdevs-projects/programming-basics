
import math

print('Enter the coordinates x and y to create a regular polygone.\nPlease enter the coordinates one by one.\nWhen you have finished, enter blank to quit in the x coordinate')
first_x = int(input('Enter the first x-coordinate:'))
first_y = int(input('Enter the first y-coordinate:'))

x = []
y = []

x.append(first_x)
y.append(first_y)
sides = []

while True:                                                                 #loop per continuare a chiedere coordinate del poligono.
    x_request = input('Enter the next x-coordinate (blank to quit):')
    if x_request == '':
        break
    y_request = input('Enter the next y-coordinate:')
    x_request = int(x_request)
    y_request = int(y_request)
    x.append(x_request)
    y.append(y_request)
    others_sides = abs(abs(x[-1] - x[-2]) + abs(y[-1] - y[-2]))
    sides.append(others_sides)

first_late = abs(abs(x[1]-x[0])-abs(y[1]-y[0]))
last_side = abs(abs(x[0]-x[-1])-abs(y[0]-y[-1]))
hypotenuse = math.sqrt((abs((x[-1] - (x[-2]))**2) + (abs((y[-1] - (y[-2]))**2))))
perimeter = first_late+hypotenuse+(others_sides-first_late)


if len(x) > 4:                                                      #se il poligono ha più di 4 lati
    perimeter = first_late * len(x)
    print(f'The perimeter of the polygon is {perimeter}cm')
elif len(x) < 4:                                                     #se il pologono è un triangolo
    if x[0] != x[-1]:
        hypotenuse = math.sqrt((abs((x[0] - (x[-1]))**2) + (abs((y[0] - (y[-1]))**2))))
        perimeter = first_late+others_sides+hypotenuse
        print(f'The perimeter of the polygon is {perimeter}cm')
    else:
        print(f'The perimeter of the polygon is {perimeter}cm')
else:                                                                 #se il triangolo ha 4 lati
    perimeter = (first_late+(sum(sides)-first_late)+last_side)
    print(f'The perimeter of the polygon is {perimeter}cm')