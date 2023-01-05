def morse_code(text):
    d_morse_letters = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
        'E': '.', 'F':'..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-',
        'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        'Á': '.--.-', 'Ä': '.-.-', 'É': '..-..', 
        'Ñ': '--.--', 'Ö': '---.', 'Ü': '..--'
    }

    d_morse_numbers = {
        '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', '0': '-----'
    }

    text = text.upper()
    morse = ''

    for c in text:
        if c in d_morse_letters:
            morse += f'{d_morse_letters[c]} '
        elif c in d_morse_numbers:
            morse += f'{d_morse_numbers[c]} '
        else:
            continue

    return morse

def main():
    text = input('Enter text to traslate in morse code: ')
    print(morse_code(text))

if __name__ == "__main__":
    main()



