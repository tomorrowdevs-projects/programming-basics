# ask to user column and row 
col = input('type a column: ').lower()
row = int(input('type a row: '))

# storing in a variable a string with the letters of the column that start with a white or black square
start_black = 'aceg'
start_white = 'bdfh'

# conditions to determinate wich color is the square typed by user
if col not in start_black or col not in start_white:
    print("there's something wrong, try again")
elif row > 8:
    print("there's something wrong, try again")
elif col in start_black and row % 2 == 0:
    print('white')
elif col in start_black and row % 2 > 0:
    print('black')
elif col in start_white and row % 2 == 0:
    print('black')
elif col in start_white and row % 2 > 0:
    print('white')
elif col not in start_black or col not in start_white:
    print("there's something wrong, try again")
elif row > 8:
    print("there's something wrong, try again")
