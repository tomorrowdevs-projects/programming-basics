 # asking  width and lenght of room to user and convert the string obtained into a floating number 
width = float(input('Insert width of room in meters: '))
lenght = float(input('Insert lenght of room in meters: '))

# calculating area of room and store result into a variable
area = round(width * lenght, 2) 
print("The area of room in meters: " + str(area))
