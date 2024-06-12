import math

first_x = input('Enter x: ')
first_y = input('Enter y: ')

prev_x = first_x
prev_y = first_y
perimeter = 0

while True:
    next_x = input('Enter new x: ')
    if next_x == '':
        side = math.sqrt((int(first_x) - int(prev_x))**2 + (int(first_y) - int(prev_y))**2)
        perimeter = perimeter + side
        break
    next_y = input('Enter new y: ')
    side = math.sqrt((int(next_x) - int(prev_x))**2 + (int(next_y) - int(prev_y))**2)
    perimeter = perimeter + side

    prev_x = next_x
    prev_y = next_y


print(perimeter)
