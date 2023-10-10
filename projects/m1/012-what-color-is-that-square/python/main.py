'''
# What Color Is That Square?

Positions on a chess board are identified by a letter and a number.  
The letter identifies the column, while the number identifies the row, as shown below:

<img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Chess-board-with-letters_nevit_111.svg" />

Write a program that reads a position from the user.  
Use an if statement to determine **if the column begins with a black square or a white square**.  
Then use modular arithmetic to report the color of the square in that row. 
Your program may assume that a valid position will always be entered. 
It does not need to perform any error checking.

Example:  
Input =  a1  
Output = black

Input = d5  
Output = white
'''

pos_x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
pos_y = [1, 2, 3, 4, 5, 6, 7, 8]

black_squares = []
white_squares = []

valid_position = False

def create_chess_table():

    for i in range(0, len(pos_x), 1):
        if i%2 == 0 and pos_y[i]%2 != 0:
            for y in range(0, len(pos_y), 2):
                black_squares.append(str(pos_x[i] + str(pos_y[y])))
            for y in range(1, len(pos_y), 2):
                white_squares.append(str(pos_x[i] + str(pos_y[y])))
        elif i%2 != 0 and pos_y[i]%2 == 0:
            for y in range(1, len(pos_y), 2):
                black_squares.append(str(pos_x[i]) + str(pos_y[y]))
            for y in range(0, len(pos_y), 2):
                white_squares.append(str(pos_x[i] + str(pos_y[y])))

create_chess_table()

while valid_position == False:
    
    user_position = str.lower(input("\nPlease insert valid position on chess table: "))

    if user_position in black_squares:
        valid_position = True
        print(f"\n{user_position} is in black square.\n")
    elif user_position in white_squares:
        valid_position = True
        print(f"\n{user_position} is in white square.\n")