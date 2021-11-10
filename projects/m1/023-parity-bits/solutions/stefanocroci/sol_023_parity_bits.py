while True:
    bits = input('insert a group of 8 bits: ')
    count = bits.count('1')
    if bits == '':
        break
    elif len(bits) != 8:
        print('ERROR: you should insert a group of 8 bits')
        continue
    elif int(count) % 2 == 0:
        print('your parity bit should be 0')
    else:
        print('your parity bit should be 1')