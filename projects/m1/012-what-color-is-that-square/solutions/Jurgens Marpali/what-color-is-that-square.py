position = input('Enter a position on the chess board: ')

if len(position) == 2:
    column = str(position[0])
    row = int(position[1])

    if column == 'a' or  'c' or  'e' or  'g':
        if row % 2 == 0:
            print("Your position, " + position + ", is White")
        else:
            print("Your position, " + position +  ", is Black")

    elif column == 'b' or  'd' or  'f' or 'h':
        if row % 2 == 0:
            print("Your position, " + position + ", is Black")
        else:
            print("Your position, " + position +  ", is White")