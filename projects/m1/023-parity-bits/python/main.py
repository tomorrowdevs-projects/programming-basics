
total = 0

while True:
    user_bit = input("Insert a 8 bit sequence or press enter to end: \n")
    if len(user_bit) == 8:
        for i in user_bit:
            i = int(i)
            total = total + i
        if total % 2 == 0:
            print(f"{user_bit} for even parity, parity bit should be 0")
        else:
            print(f"{user_bit} for even parity, parity bit should be 1")
    elif user_bit == '':
        break
    else:
        print('This is not a 8 bit sequence!')

