import math



head_point_x = float(input("Enter the starting x coordinate ---> "))
head_point_y = float(input("Enter the starting y coordinate ---> "))

# Variable's shift
body_point_x = head_point_x
body_point_y = head_point_y

# Varianble perimeter - scope in order to use it in the while cycle. 
perimeter = 0

# Variable X scope - a foot In and a foor Out the while cycle - or we will list the connection between the Inputs X
# I was force to use "float" to avoid - random error - by the interpretation of the variables: float? or string?

next_x = float(input("Enter x coordininate - blank to stop - ---> "))

while(next_x != ""): # here I built the condition: blank to stop the program
    
    tail_point_x = float(next_x) # here I pull the variable x in the while cycle
    tail_point_y = float(input("Enter y coordininate ---> "))
                         
    side_polygon = math.sqrt(((float(body_point_x) - float(tail_point_x)) **2) + ((float(body_point_y) - tail_point_y) **2))
    
    perimeter = side_polygon + perimeter # building the perimeter in the while cycle
    
    # last variables shift to continue the input-process
    body_point_x = tail_point_x
    body_point_y = tail_point_y
    
    next_x = (input("Enter x coordininate - blank to stop - ---> ")) 
    # here I had to remove FLOAT [tail_point_x = float(input("Enter x coordininate - blank to stop - --->"))]
    # in order to avoid this: ValueError: could not convert string to float: ''
    
side_polygon = math.sqrt((((float(head_point_x) - float(tail_point_x)) **2) + ((float(head_point_y) - float(body_point_y)) **2)))

perimeter = side_polygon + perimeter # or we cannot calculate a side of the polygon, if we stay always in the while cycle
                                     # to calculate all the perimeter: a typical risk by using while 

print(f"Perimeter: {perimeter}")