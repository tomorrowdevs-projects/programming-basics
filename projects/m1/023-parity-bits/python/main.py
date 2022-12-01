print('This program compute the parity bit for group of 8 bits using even parity.')

while True:
    bit_string = input('Insert your octet (blank to exit): ')
    print('test2')
    if bit_string == '':
        break

    bit_counter1 = bit_string.count('1')
    bit_counter0 = bit_string.count('0')

    bit_sum = bit_counter1 + bit_counter0
    string_len = len(bit_string)

    if bit_sum != 8:
        print('You have to insert an octet (Just 0 or 1 allowed)')

    if bit_sum == 8:
        if bit_counter1 % 2 == 0:
            print('The bit string is even a 0 will be added:', bit_string + ''.join ('0'))
        else:
            print('The bit string is odd a 1 will be added:', bit_string + ''.join ('1'))