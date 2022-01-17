#import math module
import math

# declare three empty list: one for the x coordinates, one for the y coordinates and one for the distance between each point
c_x = []
c_y = []
distance = []



while True:
# using while true we made an infinite loop that keeps asking a value for "x" and "y", representing the coordinates of a polygon
    x = input('insert x: ')
    y = input('insert y: ')
# conditional if else statements that stops the loop if user enter a blank line else add the value into respective lists
    if x == '' or y == '':
        break
    else:
        c_x.append(int(x))
        c_y.append(int(y))
        # conditional if statements that calculates the distance between points if coordinate's lists have more than one value and add to "distance"
        if len(c_x) > 1 and len(c_y) > 1:
          distance.append(math.sqrt((c_x[-1] - c_x[-2])**2 + ((c_y[-1]) - c_y[-2])**2))
# conditional that calculates the distance between the last point with the first if "distance" have two value or more, else print an error message.
if len(distance) >= 2:
  distance.append(math.sqrt((c_x[-1] - c_x[0])**2 + ((c_y[-1]) - c_y[0])**2))
  perimeter = sum(distance)
  print(perimeter)  
else:
  print("Non hai inserito un poligono")    
    


