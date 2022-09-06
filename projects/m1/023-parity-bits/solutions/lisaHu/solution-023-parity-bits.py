while(True):
    bits = input('Enter 8 bits (blank line to stop):  ')
    if bits == " ":
        break
    if len(bits) == 8:
        bit1 = bits.count('1')
        if bit1 % 2 == 0:
            print('The parity bit is 0')
        else:
            print('The parity bit is 1')
    else:
        print('Error: enter a correct number of bits.')