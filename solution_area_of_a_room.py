##resolution problem m1-001 
#This program has been created to let people calucate the area of a room, given lenght and width.
print('For calulate the area of a rectangular room please enter the following data: ')
w=input('Enter the winth of the room in meters: ')
l=input('Enter the lenght of the room in meters: ')
w=float(w)
l=float(l)
print('The area of the room is:', w*l, 'm**2')

#In case of a room square, please insert this data
s=input('For a square please insert only the lengh of a side: ')
s=float(s)
print('The area of the room is:', s*s, 'm**2')

#In case of a triangular room, please insert this data 
print('For a triangular room, please insert this data: ')
b=input('Enter the lenght of the base in meters: ')
h=input('Now please enter the high of the triangle in meters: ')
b=float(b)
h=float(h)
print('The area of the room is: ', (b*h)/2, 'm**2')
