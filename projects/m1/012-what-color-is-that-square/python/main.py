# input from user
input_square = str.casefold(input('Write the name of a square in a chess board: '))

# assign column and row from a given coordinates 
column = input_square[0]
row = int(input_square[1])

# column starting color
black_column = 'aceg'
white_column = 'bdfh'

# ceck if the column start whit black or white square then if the row is even (the starting color is even) or odd and print the result
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