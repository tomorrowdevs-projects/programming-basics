USER_INPUT = input('type a word: ')

new_word = ''

for i in reversed(USER_INPUT):
    new_word += i

if new_word == USER_INPUT:
    result = f'{USER_INPUT} is a palyndrome'
else:
    result = f'{USER_INPUT} is not a palyndrome'

print(result)



