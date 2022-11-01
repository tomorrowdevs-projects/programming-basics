"""Write a program that reads a position from the user. 
Use an if statement to determine if the column begins with a black square or a white square. 
Then use modular arithmetic to report the color of the square in that row. 
Your program may assume that a valid position will always be entered. 
It does not need to perform any error checking."""

# input from user
input_square = str.casefold(input('Write the name of a square in a chess board: '))

# assign column and row from a given coordinates 
column = input_square[0]
row = int(input_square[1])

black_column = 'aceg'
white_column = 'bdfh'

# ceck if the column start whit a black or a white square then if the row is even (the starting color is even) or odd and print the result
if column in black_column:
    if row % 2 == 0:
        print('Your square is white')
    else:
        print('Your square is black')
elif column in white_column:
    if row % 2 == 0:
        print('Your square is black')
    else:
        print('Your square is white')






















"""
column_letter = 'abcdefgh'
row_number = '12345678'

column = input_square[0]
row = input_square[1]

if column in column_letter and row in row_number:
    print('OK')
else:
    print('error')
"""
