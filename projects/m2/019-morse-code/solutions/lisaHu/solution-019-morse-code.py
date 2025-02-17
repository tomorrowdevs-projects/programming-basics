def conver_to_morse():
    morse_code = {"a":"._", "b":"_...", "c":"_._.",
    "d":"_..", "e":".", "f":".._.", "g":"__.", "h":"....",
    "i":"..", "j":".___", "k":"_._", "l":"._..", "m":"__",
    "n":"_.", "o":"___", "p":".__.", "q":"__._", "r":"._.",
    "s":"...", "t":"_", "u":".._", "v":"..._", "w":".__",
    "x":"_.._", "y":"_.__", "z":"__..", "à":".__._",
    "é":".._..", "1":".____", "2":"..___", "3":"...__",
    "4":"...._", "5":".....", "6":"_....", "7":"__...",
    "8":"___..", "9":"____.", "0":"_____"
    }
    phrase = input('Enter phrase to convert in morse code:  ')
    result = ''
    
    #for every character in phase, check if it's in keys lst. If it is, add dict[key(aka character)] to result
    for c in phrase.lower():
        if c in morse_code.keys():
            result = result + morse_code[c] + ' '
    return result

if __name__ == "__main__":
    print(conver_to_morse())