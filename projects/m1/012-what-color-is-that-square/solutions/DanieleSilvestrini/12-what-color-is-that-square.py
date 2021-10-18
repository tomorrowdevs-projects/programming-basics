col, row = (input('Insert column and row separated by a whitespace:\n').lower()).split()

col_black = ['a', 'c', 'e', 'g']
col_white = ['b', 'd', 'f', 'h']

if col in col_black and (int(row)) % 2 == 0:
    print('white')
elif col in col_black and (int(row)) % 2 > 0:
    print('black')
elif col in col_white and (int(row)) % 2 == 0:
    print('black')
elif col in col_white and (int(row)) % 2 > 0:
    print('white')
