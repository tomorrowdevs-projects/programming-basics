#Positions on a chess board are identified by a letter and a number. 
#The letter identifies the column, while the number identifies the row, as shown below:

#Write a program that reads a position from the user. 
#Use an if statement to determine if the column begins with a black square or a white square. 
#Then use modular arithmetic to report the color of the square in that row. 
#For example, if the user enters a1 then your program should report that the square is black. 
#If the user enters d5 then your program should report that the square is white. 
#Your program may assume that a valid position will always be entered. 
#It does not need to perform any error checking.


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