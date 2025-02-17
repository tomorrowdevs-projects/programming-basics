position = str(input("Insert a position on chess board "))

position=position.lower()

column = position[0]
row = int(position[1])

remainder = row % 2

if column == 'a' or column == 'c' or column == 'e' or column =='g':
    if remainder == 0:
        print("White")
    else:
        print("Black")
else:
    if remainder  == 0:
        print("Black")
    else:
        print("White")

