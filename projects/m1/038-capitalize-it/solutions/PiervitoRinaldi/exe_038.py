text = str(input('Enter text: '))

# This function corrects lowercase errors, \
# but it will run well only if after '.' '?' '!', it will be one space(except for the last caracter).
def capitalize(text):
    text += ' '
    first_letter = text[0].upper() # capitalize the first letter
    print(first_letter, end='')

    for letter in range(1,len(text)):
        # condition to capitalize the 'i'
        if text[letter] == 'i' and text[letter - 1] == ' ' and (text[letter + 1] == ' '\
            or text[letter + 1] == '!' or text[letter + 1] == '.' or text[letter + 1] == '?' or text[letter + 1] == "'"):
            letter = 'I'
            print(letter, end= '')
            continue
        # condition to capitalize letter after '.' '?' '!'
        elif (text[letter - 2] == '.' or text[letter - 2] == '?' or text[letter - 2] == '!'):
            letter = text[letter].upper()
            print(letter, end='')
            continue

        print(text[letter], end='')


capitalize(text)