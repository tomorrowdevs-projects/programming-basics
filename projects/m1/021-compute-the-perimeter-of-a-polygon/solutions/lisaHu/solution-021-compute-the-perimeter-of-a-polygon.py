import math

#creation of empty list for each coordinate
x = []
y = []

#input of first coordinates and append (add) to corresponding list + create variable of perimeter
firstX = float(input('Enter the first x-coordinate:  '))
firstY = float(input('Enter the first y-coordinate:  '))
x.append(firstX)
y.append(firstY)
perimeter = 0

#creation of loop with input of next coordinates and if statement to break
while(True):
    nextX = input('Enter the next x-coordinate (blank to quit):  ')
    if nextX == " ":
        break
    nextY = float(input('Enter the next y-coordinate:  '))

    #calculate the last added coordinates (nextX and nextY) with the last coordinates of the lists (x[-1] and y[-1])
    side = math.sqrt(((float(nextX) - float(x[-1]))** 2) + ((nextY - y[-1])**2))
    x.append(nextX)
    y.append(nextY)
    perimeter = perimeter + side

#after the loop has been broken, calcute the last side between first and last coordinates and add it to perimeter
lastSide = math.sqrt(((firstX - float(x[-1]))** 2) + ((firstY - float(y[-1]))**2))
perimeter = perimeter + lastSide
print(perimeter)
    