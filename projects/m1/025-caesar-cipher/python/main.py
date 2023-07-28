message = input('insert a message to encode or decode: ')
number = int(input('insert a positive number to encode or negative to decode: '))

ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
new_message = ''
NUMBERS = '0123456789'

for i in message:
    if i in NUMBERS or i == ' ':
        new_message += i
    elif i == 'à':
        i = 'a'
    elif i == 'è' or i == 'é':
        i = 'e'
    elif i == 'ì':
        i = 'i'
    elif i == 'ò':
        i = 'o'
    elif i == 'ù':
        i = 'u'
    for e in ALPHABET:
        if e == i:
            index = ALPHABET.index(e)
            if index + number >= 26:
                new_message += ALPHABET [(index + (number)) % 26]
            else: 
                new_message += ALPHABET[index + (number)]
print(new_message)