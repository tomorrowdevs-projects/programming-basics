import math

x_origin = int(input("Enter the first x-coordinate: "))
y_origin = int(input("Enter the first y-coordinate: "))

perimeter = 0

x_first_point = input("Enter the next x-coordinates (blank to quit): ")

if x_first_point == " ":
    print("Enter at least three coordinates value.")
else :
    y_first_point = int(input("Enter the next y-coordinates: "))
    first_side = math.sqrt(((int(x_origin) - int(x_first_point))** 2) +
    ((y_origin - y_first_point)**2) )
    perimeter += first_side
    x_new = input("Enter the next x-coordinates (blank to quit): ")
    
    if x_new == " ":
        print(f"There is only one line {first_side} long")
    else:
        x_last_point = x_first_point
        y_last_point = y_first_point
        while True:
            y_new = int(input("Enter the next y-coordinates: "))
            next_side = math.sqrt(((int(x_new) - int(x_last_point))** 2) +
            ((y_new - y_last_point)**2) )
            perimeter += next_side
            x_last_point = x_new
            y_last_point = y_new
            x_next = input("Enter the next x-coordinates (blank to quit): ")
            
            if x_next == " ":
                last_side = math.sqrt(((int(x_new) - int(x_origin))** 2) +
                ((y_new - y_origin)**2) )
                perimeter += last_side
                print(f"The perimeter of that polygon is: {perimeter}")
                break
            else:
                x_new = x_next
                continue

               

            
            