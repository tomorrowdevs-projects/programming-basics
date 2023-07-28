# while True:
#     user_input = int(input('type a postive number or a negative number or a 0 to end: '))
#     if user_input <= 0:
#         break
#     else:
#         number = user_input
#         sequence = str(number) 
#         while number != 1:
#             if number % 2 == 0:
#                 number = number // 2
#                 sequence += ' ' + str(number)
#             else:
#                 number = number * 3 + 1
#                 sequence += ' ' + str(number)
#         print(sequence)

sequence = ''
user_input = 1
result = ''

while user_input > 0:
    user_input = input('type a postive number or a negative number or a 0 to end: ')
    if user_input == '':
        result += f'Error: empty field\n'
        user_input = 1
        continue
    elif user_input.isdigit() == False:
        result += f'Error: invalid value\n'
        user_input = 1
        continue
    user_input = int(user_input)
    number = user_input
    sequence = str(number) 
    if user_input != 0:
        while sequence[-1] != '1':
            if number % 2 == 0:
                number = number // 2
                sequence += f' {number}'
            else:
                number = number * 3 + 1
                sequence += f' {number}'
        result += f'{sequence} \n'
    else:
        continue
print(result)
