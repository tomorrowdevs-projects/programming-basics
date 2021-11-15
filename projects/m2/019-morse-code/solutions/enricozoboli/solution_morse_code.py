def create_code_dict():
    extended_alphabet = (
        [chr(x) for x in range(65, 91)] +
        [chr(193), chr(196), chr(201), chr(209), chr(214), chr(220)]
    )
    numbers = [chr(x) for x in range(48, 58)]
    numbers.append(numbers.pop(0))
    extended_alphabet.extend(numbers)
    morse_list = [
                '.-', '-...', '-.-.', '-..', '.', '..-.', 
                '--.', '....', '..', '.---', '-.-', '.-..','--', '-.', 
                '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-',
                '.--', '-..-', '-.--','--..','.--.-', '.-.-', '..-..',
                '--.--','---.', '..--','.----', '..---', '...--', '....-',
                '.....', '-....', '--...', '---..', '----.', '-----'
                ]
    code_dict = dict(zip(extended_alphabet, morse_list))
    return code_dict

def code_morse(msg, d):
    temporary_msg = []
    for c in msg:
        if c.upper() in d:
            temporary_msg.append(d[c.upper()])
    coded_msg = ' '.join(temporary_msg)
    return coded_msg

def main():
    msg = input("Enter your message: ")
    print(code_morse(msg, create_code_dict()))

if __name__ == "__main__":
    main()