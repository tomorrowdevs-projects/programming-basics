# This program calculates the perimeter of a polygon
# firstX ,firstY,nextX,nextY.They are the Cartesian coordinates of the polygon that the user must enter


firstX = input('Enter first x-cordinate ')
firstY = input('Enter first y-cordinate ')

firstX1 = firstX
firstY1 = firstY
perimeter = 0

while True :
    nextX = input('Enter the next x-coordinate (blank to quit) ')

    if nextX == ' ' :
        break
    
    nextY = input('Enter the next y-coordinate (blank to quit) ')

    polygonSide = ((float(nextX) - (float(firstX1)))**2) + ((float(nextY) - (float(firstY1)))**2)
    polygonSide = polygonSide**(1/2)

    perimeter = perimeter + polygonSide

    firstX1 = nextX
    firstY1 = nextY

lastPolygonSide = ((float(firstX1) - (float(firstX)))**2) + ((float(firstY1) - (float(firstY)))**2)
lastPolygonSide = lastPolygonSide**(1/2)

finalPerimeter = perimeter + lastPolygonSide

print('The perimeter of that polygon is',finalPerimeter)   