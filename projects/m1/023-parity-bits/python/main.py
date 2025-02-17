
user_bit = ' '

total = 0

message = ''

invalid_value = None

while user_bit != '':
    user_bit = input("Insert a 8 bit sequence or press enter to end: \n")
    if user_bit == '':
        continue
    for i in user_bit:
        if i != '0' and i != '1':
            invalid_value = True
    if invalid_value == True:
        message = message + f'{user_bit} invalid value \n'
        continue       
    if len(user_bit) != 8:
        message = message + f'{user_bit} invalid value \n'
        continue
    else:
        for i in user_bit:
            i = int(i)
            total = total + i
        if total % 2 == 0:
            message = message + f'{user_bit} for even parity, parity bit should be 0 \n'
            total = 0
        else:
            message = message + f"{user_bit} for even parity, parity bit should be 1 \n"
            total = 0
print(message)
