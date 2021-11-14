letters = ['a','b','c','d','e','f','g','h']
coordinate = input('please enter the coordiante: ').lower()
wstart = letters[::2]
bstart = letters[1::2]
def colordef(x):
    if coordinate[0] not in letters or int(coordinate[1]) < 1 or int(coordinate [1]) > 8:
        print('invalid coordinate')
    elif len(coordinate) > 2:
        print('the coordinate must be of 1 lettter and 1 number')
    else:
        if coordinate[0] in wstart:
            if int(coordinate[1]) % 2 == 0:
                print('white box')
            else:
                print('black box')
        elif coordinate[0] in bstart:
            if int(coordinate[1]) % 2 == 0:
                print('black box')
            else:
                print('white box')
colordef(coordinate)