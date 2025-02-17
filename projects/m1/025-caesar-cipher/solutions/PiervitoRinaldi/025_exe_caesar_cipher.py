import string

to_encode_msg = input('Enter something to encode: ')
to_decode_msg = input('Enter something to decode: ')

letters_lowercase = string.ascii_lowercase
letters_lowercase = str(letters_lowercase)

letters_uppercase = string.ascii_uppercase
letters_uppercase = str(letters_uppercase)


numbers = string.digits
numbers = str(numbers)

for letter in to_encode_msg:

    if letter in letters_lowercase:
        if letter == 'x':
            letter = 'a'
            print(letter, end='')
        elif letter == 'y':
            letter = 'b'
            print(letter, end='')
        elif letter == 'z':
            letter = 'c'
            print(letter, end='')
        else:
            position = letters_lowercase.find(letter)
            cipher_input = letters_lowercase[position + 3]
            print(cipher_input, end= '')

    elif letter in letters_uppercase:
        if letter == 'X':
            letter = 'A'
            print(letter, end='')
        elif letter == 'Y':
            letter = 'B'
            print(letter, end='')
        elif letter == 'Z':
            letter = 'C'
            print(letter, end='')
        else:
            position = letters_uppercase.find(letter)
            cipher_input = letters_uppercase[position + 3]
            print(cipher_input, end= '')

    elif letter in numbers:
        print(letter, end='')

for letter in to_decode_msg:

    if letter in letters_lowercase:
        if letter == 'a':
            letter = 'x'
            print(letter, end='')
        elif letter == 'b':
            letter = 'y'
            print(letter, end='')
        elif letter == 'c':
            letter = 'z'
            print(letter, end='')
        else:
            position = letters_lowercase.find(letter)
            cipher_input = letters_lowercase[position - 3]
            print(cipher_input, end= '')

    elif letter in letters_uppercase:
        if letter == 'A':
            letter = 'X'
            print(letter, end='')
        elif letter == 'B':
            letter = 'Y'
            print(letter, end='')
        elif letter == 'C':
            letter = 'Z'
            print(letter, end='')
        else:
            position = letters_uppercase.find(letter)
            cipher_input = letters_uppercase[position - 3]
            print(cipher_input, end= '')

    elif letter in numbers:
        print(letter, end='')
