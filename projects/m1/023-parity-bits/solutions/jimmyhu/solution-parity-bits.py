while True:
    init_parity = input('Enter the 8 bits: ')
    up = init_parity.count('1')
    down = init_parity.count('0')
    if init_parity == ' ':
        break
    elif (up + down) != len(init_parity):
        print('only 0 and 1 are allowed')
    elif len(init_parity) > 8:
        print('too much digit, please enter max 8 digits: ')
    else:
        if up % 2 == 0:
            print('the parity bit should be 0')
        else:
            print('the parity bit should be 1')
