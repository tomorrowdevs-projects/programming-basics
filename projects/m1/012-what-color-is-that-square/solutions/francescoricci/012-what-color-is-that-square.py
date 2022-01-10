def color_in_square(cell):
    letter_colum = 'abcdefgh'
    colum = cell[0].lower()
    row = int(cell[1])
    colum = letter_colum.find(colum) + 1

    if (colum % 2):
        if (row % 2):
            return('black')  # DD
        else:
            return('white')  # DP
    else:
        if (row % 2):
            return('white')  # PD
        else:
            return('black')   #PP

cell = input('Insert cell of return color: ')
#cell = 'a2'
print("\r\nColor's cell " + cell + " is " + color_in_square(cell))





