user_input = input('Insert a string to check if it is a palyndorme: \n')

new_string = ''

for i in reversed(user_input):
    new_string = new_string + i

if user_input == new_string:
    print(f'{user_input} is a palyndrome')
else:
    print(f'{user_input} is not a palyndrome')

