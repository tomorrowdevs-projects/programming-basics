

def letters_2morse(text):

    # given a string translate all of the letters and digits in the message to Morse code
    # leaving a space between each sequence of dashes and dots. 

    morse_code = {
            'A':'.-', 'B':'-...', 'C':'-.-.',
            'D':'-..', 'E':'.', 'F':'..-.',
            'G':'--.', 'H':'....', 'I':'..',
            'J':'.---', 'K':'-.-', 'L':'.-..',
            'M':'--', 'N':'-.', 'O':'---',
            'P':'.--.', 'Q':'--.-', 'R':'.-.',
            'S':'...', 'T':'-', 'U':'..-',
            'V':'...-', 'W':'.--', 'X':'-..-',
            'Y':'-.--', 'Z':'--..', '1':'.----', 
            '2':'..---', '3':'...--', '4':'....-', 
            '5':'.....', '6':'-....', '7':'--...', 
            '8':'---..', '9':'----.', '0':'-----', 
            'Á':'.--.-', 'Ä':'.-.-', 'É':'..:..', 
            'Ñ':'--.--', 'Ö':'---.', 'Ü':'..--'
            }

    output= ''
    text = text.upper()
    for letter in text:
        for key in morse_code:
            if letter == key:
                output += morse_code[key]+ ' '

    return output


message = input('Insert a message: ') 
print(letters_2morse(message))

    

