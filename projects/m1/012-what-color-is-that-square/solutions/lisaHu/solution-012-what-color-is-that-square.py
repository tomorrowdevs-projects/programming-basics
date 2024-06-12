#Receive coordinates from user
coordinates = input("Enter coordinates in lowercase:  ")

#Divide the characters of the coordinates
letterX = coordinates[0]
numX = coordinates[1]

#Assign for each character to one of the 2 lists (they are assigned according to what color is the square next to their name at the border of the chessboard)
blackSquare = ['a','c','e','g','1','3','5','7']
whiteSquare = ['b', 'd', 'f', 'h', '2', '4', '6', '8']

#Show result through prints and if statements that combine the lists
if letterX in blackSquare and numX in blackSquare:
    print('Black square')
elif letterX in blackSquare and numX in whiteSquare:
    print('White square')
elif letterX in whiteSquare and numX in whiteSquare:
    print('Black square')
elif letterX in whiteSquare and numX in blackSquare:
    print('White square')