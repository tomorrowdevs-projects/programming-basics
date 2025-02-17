import math

c_x = []
c_y = []
sides = []
x = int(input("Enter the first x-coordinate: "))
c_x.append(x)
y = int(input("Enter the first y-coordinate: "))
c_y.append(y)

for x in c_x:
    x = input("Enter the next x-coordinate: ")
    for line in x:
        if line != '\n':
            c_x.append(x)
            y = input("Enter the next y-coordinate: ")
            c_y.append(y)
            side = math.sqrt((float(c_x[-1])-float(c_x[-2]))**2+(float(c_y[-1])-float(c_y[-2]))**2)
            sides.append(side)
        
last_side = math.sqrt((float(c_x[0])-float(c_x[-1]))**2+(float(c_y[0])-float(c_y[-1]))**2)
sides.append(last_side)
print (f"The perimeter of your polygon is: {sum(sides)}")
        
            
