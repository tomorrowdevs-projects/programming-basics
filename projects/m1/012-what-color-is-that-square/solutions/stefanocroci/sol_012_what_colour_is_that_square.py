# Determine if the column begins with a black square or a white square
black_column = ['a','c','e','g']
withe_column = ['b','d','f','h']

# Ask the user for an input
cell = input('insert a position on chessboard: ').lower()

column = str(cell[0])
row = int(cell[1])

# Determine if the cell is black or white and display the result
if column in black_column and row % 2 != 0:   
    print(str(cell) + ' is in a black square')
elif column in black_column and row % 2 == 0:
    print(str(cell) + ' is in a white square')

if column in withe_column and row % 2 == 0:   
    print(str(cell) + ' is in a black square')
elif column in withe_column and row % 2 != 0:
    print(str(cell) + ' is in a white square')
    

