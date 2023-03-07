USER_INPUT = input('type a word: ')

new_word = ''

for i in reversed(USER_INPUT):
    new_word += i

if new_word == USER_INPUT:
    print(f'{USER_INPUT} is a palyndrome')
else:
    print(f'{USER_INPUT} isn\'t a palyndrome')



