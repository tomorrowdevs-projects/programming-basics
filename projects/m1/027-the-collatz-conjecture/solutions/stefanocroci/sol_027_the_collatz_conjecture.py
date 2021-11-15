while True:
    leading = int(input('Insert an integer number greater than one: '))
    if leading <= 0:
        break
    while True:
        print(leading)
        if leading == 1:
            print('Finished')
            break
        if leading % 2 == 0:
            leading /= 2
        else:
            leading = (leading * 3 + 1)