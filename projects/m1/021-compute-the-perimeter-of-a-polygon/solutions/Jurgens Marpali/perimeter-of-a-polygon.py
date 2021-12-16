import math

perimeter = 0


first_x = int(input("Please type the first x point: "))
first_y = int(input("Please type the first y point: "))

this_x = first_x
this_y = first_y


x_second = input("Enter the next x coordinate (blank to quit): ")

while x_second != " ":
    x_second = int(x_second)
    y_second = int(input("Enter the next y coordinate: "))

    distance = math.sqrt((x_second - this_x) ** 2 + (y_second  - this_y) ** 2)
    perimeter += distance

    this_x = x_second
    this_y = y_second

    x_second = input("Enter the next x coordinate (blank to quit): ")
    #i tried using the if statement here but it didn't work..i totally forgot about the existence of the while loop and it took me 1 hour 
    #to find out how to make it work without it lol

last_d = math.sqrt((this_x - first_x) ** 2 + (this_y - first_y) ** 2)
perimeter += last_d
print("The perimeter of the polygon is", "%.2f" % perimeter)



