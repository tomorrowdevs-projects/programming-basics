
while True:
    bit =  input('Enter bit: ')

    bit= str(bit)
    len_bit = len(bit)

    for not_0not_1 in bit:
        if not_0not_1 != '0' and not_0not_1 != '1':
            print('ERROR: Enter only 0 or 1!')
            
    if len_bit != 8:
        print('ERROR: Enter an eight line number!')
            
    elif bit == '':
        print('ERROR: Enter an eight line number!')
            


    count = 0
    for one in bit:
        if one == '1':
            count = count + 1

    if count % 2 == 0:
        print('The parity bit is 0!')
    else:
        print('The parity bit is 1!')
    
    continue

