def morse_converter(str):
    table = {
        'A' : '.-',
        'B' : '-...',
        'C' : '-.-.',
        'D' : '-..',
        'E' : '.',
        'F' : '..-.',
        'G' : '--.',
        'H' : '....',
        'I' : '..',
        'J' : '.---',
        'K' : '-.-',
        'L' : '.-..',
        'M' : '--',
        'N' : '-.',
        'O' : '---',
        'P' : '.--.',
        'Q' : '--.-',
        'R' : '.-.',
        'S' : '...',
        'T' : '-',
        'U' : '..-',
        'V' : '...-',
        'W' : '.--',
        'X' : '-..-',
        'Z' : '--..',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        '0': '-----',
        'Á': '.--.-',
        'Ä': '.-.-',
        'É': '..-..',
        'Ñ': '--.--',
        'Ö': '---.',
        'Ü': '..--',
    }
    morse = []
    base = list(str)
    while ' ' in base:
        base.remove(' ')
    for letter in base:
        if letter in table:
            morse.append(table[letter])
    return ' '.join(morse)


def main():
    intext = input('Enter the phare to convert in morse: \n').upper()
    print(morse_converter(intext))
if __name__ == '__main__':
    main()