lst = []

while True:
    user_bit = input("Insert a 8 bit sequence or press enter to end: \n")
    if len(user_bit) == 8:
        lst.append(user_bit)
    elif user_bit == '':
        break
    else:
        print('This is not a 8 bit sequence!')

for i in lst:
    number = i.count('1')
    if number % 2 == 0:
        print(f"{i} for even parity, parity bit should be 0")
    else:
        print(f"{i} for even parity, parity bit should be 1")


