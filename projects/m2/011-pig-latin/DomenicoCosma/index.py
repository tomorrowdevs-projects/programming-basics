
def pig_latin():
    text = input('Enter a text string \n')
    text_list = text.split()
    cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'y', 'w', 'x', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'Y', 'W', 'X', 'Z']
    vowel = ['a', 'e', 'i', 'o', 'u']
    for n in text_list:
        if n[0].isupper() and n[0] in cons:
            n = n[1].upper() + n[2:].lower() + n[0].lower() + 'ay'    #returns the word from the second letter and concatenats the first letter of the word and 'ay' if the first letter of the word is a consonant and UPPERCASE
        elif n[0] in cons:
            n = n[1:] + n[0] + 'ay'              #returns the word from the second letter and concatenats the first letter of the word and 'ay' if the first letter of the word is a consonant
        elif n[0] in vowel or n[0].isupper():
            n = n + 'way'                        #concatenates the word with 'way' if the first letter of the word is a vowel
        text_str = ''.join(n)
        print(text_str, end=' ')

pig_latin()