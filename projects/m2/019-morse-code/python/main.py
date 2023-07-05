import punctation

def alphabet_morse_code()->dict:
    '''
    return a dictionary that map morse code for each characters
    '''

    morse_code = {
        "A":".-",
        "B":"-...",
        "C":"-.-.",
        "D":"-..",
        "E":".",
        "F":"..-.",
        "G":"--.",
        "H":"....",
        "I":"..",
        "J":".---",
        "K":"-.-",
        "L":".-..",
        "M":"--",
        "N":"-.",
        "O":"---",
        "P":".--.",
        "Q":"--.-",
        "R":".-.",
        "S":"...",
        "T":"-",
        "U":"..-",
        "V":"...-",
        "W":".--",
        "X":"-..-",
        "Y":"-.--",
        "Z":"--..",
        "1":".---",
        "2":"..---",
        "3":"...--",
        "4":"....-",
        "5":".....",
        "6":"-....",
        "7":"--...",
        "8":"---..",
        "9":"----.",
        "0":"-----",
        "Á":".--.-",
        "Ä":".-.-",
        "É":"..-..",
        "Ñ":"--.--",
        "Ö":"---.",
        "Ü":"..--" 
        }
    return morse_code

while True:
    msg = input("Insert a message: ")
    if msg != "":
        break
    else:
        print("Insert a message not blank please!")

words = punctation.remove_punctuation(msg)

morse_code_msg = ""
morse_code = alphabet_morse_code()

for string in words:
    for char in string:
        char = char.capitalize()
        morse_code_msg += morse_code[char] + " "

print(morse_code_msg)