#Write a program that asks the user to enter the width and length of a room. 

width = input('Enter the width of the room in square metres: ')
length = input('Enter the length of the room in square metres ')

'''
The length and the width will be entered as **floating-point numbers**.
add a check that allows you to discard non-numeric inputs
'''

while width.isnumeric() == False:
    print("You can't use string, only numbers!")
    width = input('Enter the width of the room in square metres: ')
else:
    width = float(width)

while length.isnumeric() == False:
    print("You can't use string, only numbers!")
    length = input('Enter the length of the room in square metres ')
else:
    length = float(length)

#Once these values have been read, your program should compute and display the area of the room. 

area1 = width * length
print(f'The area of the room is: {area1} mq')