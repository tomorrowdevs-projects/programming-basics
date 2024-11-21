def  intoNumber(str):
    buttons = {
        '1' : '.,?!:',
        '2' : 'ABC',
        '3' : 'DEF',
        '4' : 'GHI',
        '5' : 'JKL',
        '6' : 'MNO',
        '7' : 'PQRS',
        '8' : 'TUV',
        '9' : 'WXYZ',
        '0' : ' ' ,
    };
    converted = ''
    for letter in str:
        for key in buttons:
            if letter in buttons[key]:
                for i in range(buttons[key].index(letter)+1):
                    converted += key
    return converted

def main():
    base = input('Enter the pharse to convert:\n').upper()
    print(intoNumber(base))
if __name__ == '__main__':
    main()