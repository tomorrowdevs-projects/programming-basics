#Ask the user to enter room values: length and width
w = input('Enter the width of the room in square metres:\n')
l = input('Enter the length of the room in square metres:\n')

'''
I insert a block that allows me to prevent the user from entering non-numeric values,
and to replace the comma with a period if the user uses a comma
'''
try:
    x = float(w.replace(",", "."))
    y = float(l.replace(",", "."))
except ValueError:
    print('Please enter numeric values only')
    x = 0
    y = 0

#I calculate and display the area including units of measure as required and add an approximation to 2 decimals
if x != 0 and y != 0:
    area = x * y
    print(f'The area of the room is {format(area, ".2f")} square metres')