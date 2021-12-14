import math

# Compute the perimeter of a polygon.
perimeter = 0

# read the x and y coordinates for the first point on the perimeter from the user
first_x1 = next_x1 = float(input('Enter the first x-coordinate: '))
first_y1 = next_y1 = float(input('Enter the first y-coordinate: '))

# continue reading pairs of values until the user enters a blank line for the x-coordinate.
next_x2 = input('Enter the next x-coordinate (blank to quit): ')

while next_x2 != "":     
      next_x2 = float(next_x2)
      next_y2 = float(input('Enter the next y-coordinate: '))

      #Each time you read an additional coordinate you should compute the distance to the previous point and add it to the perimeter
      distance = math.sqrt((next_x2 - next_x1)**2 + (next_y2 - next_y1)**2 )
      perimeter += distance

      next_x1 = next_x2
      next_y1 = next_y2
      next_x2 = input('Enter the next x-coordinate (blank to quit): ')

# When a blank line is entered add the distance from the last point backto the first point to the perimeter.
last_distance = math.sqrt((next_x1 - first_x1)**2 + (next_y1 - first_y1)**2 )
perimeter += last_distance
print(f'The perimeter of that polygon is {perimeter}')


