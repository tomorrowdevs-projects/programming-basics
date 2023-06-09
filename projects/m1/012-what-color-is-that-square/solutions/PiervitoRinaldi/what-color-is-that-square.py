# What Color Is That Square?

position = input('Enter a position: ')

colum = position[-2:-1]
row = position[-1:]

row2 = int(row)

if colum == str('a') or colum == str('c') or colum == str('e') or colum == str('g') :

    if row2 % 2 == 0:
        print('WHITE!')
    else:
        print('BLACK!')

if colum == str('b') or colum == str('d') or colum == str('f') or colum == str('h') :

    if row2 % 2 == 0:
        print('BLACK!')
    else:
        print('WHITE!')
