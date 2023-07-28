
import math

perimeter = 0
counter = 0

first_x = input('Enter the first x-coordinate: ')

for character in first_x:
    if character.isdigit() == False and character != '.':
        print('error, first x-coordinate invalid')
        quit()

first_y = input('Enter the first y-coordinate: ')

for character in first_y:
    if character.isdigit() == False and character != '.':
        print('error, first y-coordinate invalid')
        quit()


FIRST_X = float(first_x)
FIRST_Y = float(first_y)

x = FIRST_X
y = FIRST_Y

next_x = ' '

while next_x != '':
    counter += 1
    next_x = input('Enter the next x-coordinate: ')
    if next_x == '' and counter <= 2:
        print('enter at least 3 pairs of value')
        quit()
    elif next_x == '':
        continue
    next_y = input('Enter the next y-coordinate: ')
    if next_y == '':
        print(f'invalid value for y')
        quit()
    next_x = float(next_x)
    next_y = float(next_y)
    distance = math.sqrt((next_x - x)**2 + (next_y - y)**2)
    perimeter = perimeter + distance
    x = next_x
    y = next_y
distance = math.sqrt((x - FIRST_X)**2 + (y - FIRST_Y)**2)
perimeter = perimeter + distance

print(f'The perimeter of that polygon is {perimeter}')