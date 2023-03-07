import math

perimeter = 0


first_x = input('Enter the first x-coordinate: ')
first_y = input('Enter the first y-coordinate: ')

FIRST_X = float(first_x)
FIRST_Y = float(first_y)


x = FIRST_X
y = FIRST_Y


while True:
    next_x = input('Enter the next x-coordinate: ')
    if next_x == '':
        distance = math.sqrt((x - FIRST_X)**2 + (y - FIRST_Y)**2)
        perimeter = perimeter + distance
        break
    else:
        next_y = input('Enter the next y-coordinate: ')
        next_x = float(next_x)
        next_y = float(next_y)
        distance = math.sqrt((next_x - x)**2 + (next_y - y)**2)
        perimeter = perimeter + distance
        x = next_x
        y = next_y

print(f'The perimeter of that polygon is {perimeter}')

