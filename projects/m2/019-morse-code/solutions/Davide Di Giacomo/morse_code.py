#your program should translate all of the letters and digits in the message to Morse code.
#create dictionary
#for each keys input by the user bring the reference value

def translate(string):
    #create dictionary and add space
    morse_code_dict = { 'A':'.-', 'B':'-...',
                    'C':'-.-.', 'D':'-..', 'E':'.',
                    'F':'..-.', 'G':'--.', 'H':'....',
                    'I':'..', 'J':'.---', 'K':'-.-',
                    'L':'.-..', 'M':'--', 'N':'-.',
                    'O':'---', 'P':'.--.', 'Q':'--.-',
                    'R':'.-.', 'S':'...', 'T':'-',
                    'U':'..-', 'V':'...-', 'W':'.--',
                    'X':'-..-', 'Y':'-.--', 'Z':'--..',
                    '1':'.----', '2':'..---', '3':'...--',
                    '4':'....-', '5':'.....', '6':'-....',
                    '7':'--...', '8':'---..', '9':'----.',
                    '0':'-----', ', ':'--..--', '.':'.-.-.-',
                    '?':'..--..', '/':'-..-.', '-':'-....-',
                    '(':'-.--.', ')':'-.--.-', ' ':' '}
    new_string=string.upper()
    translate=[]
    for x in new_string:
        #for each keys input by the user bring the reference value
        for key, value in morse_code_dict.items(): 
            if x in key:
                translate.append(value)
                #add space between each sequence
                translate.append(" ")
    return ("".join(translate))
    
string =input("Insert a string to translate in morse code: ")
print(translate(string))