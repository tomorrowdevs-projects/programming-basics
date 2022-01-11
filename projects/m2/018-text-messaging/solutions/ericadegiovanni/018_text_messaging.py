def text_2key(text):

    symbols = {
        1: '.,?!:',
        2: 'ABC',
        3: 'DEF',
        4: 'GHI',
        5: 'JKL',
        6: 'MNO',
        7: 'PQRS',
        8: 'TUV',
        9: 'WXYZ',
        0: ' '   
    }

    text = text.upper() # to handle both lower and uppercase letters
    output = ''
    for letter in text:
        for key in symbols:
             if letter in symbols[key]:
                 output += (str(key) * (symbols[key].rfind(letter) + 1)) 

    return output


message = input('Enter a message: ') 
print(text_2key(message))