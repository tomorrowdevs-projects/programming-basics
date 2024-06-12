perimeter = 0
first_x= float(input("Enter the first x-coordinate "))
first_y = float(input("Enter the first y-coordinate "))

x_previous = first_x
y_previous =first_y

x = str(input("Enter the next x-coordinate (blank to quit): "))

while x != "":
    x = float(x)
    y = float(input("Enter the next y-coordinate: "))
    perimeter += (((x-x_previous)**2)+((y-y_previous)**2))**(1/2)
    x_previous = x
    y_previous = y
    x = str(input("Enter the next x-coordinate (blank to quit): ",))

perimeter += (((first_x-x_previous)**2)+((first_y-y_previous)**2))**(1/2)
print("The perimeter of that polygon is {}".format(perimeter))    