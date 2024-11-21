rawmassage = input('Enter your massage: ')
shinfting = int(input('position to shift: '))
def cripting(word,x):
    loweralphabet = 'abcdefghijklmnopqrstuvwxyz'
    upperalphabet = loweralphabet.upper()
    cripted = ''
    for letter in word:
        if letter == ' ':
            cripted = cripted + ' '
            continue
        elif letter not in loweralphabet and letter not in upperalphabet:
            cripted = cripted + letter
            continue
        else:
            if letter in loweralphabet:
                alphabet = loweralphabet
            elif letter in upperalphabet:
                alphabet = upperalphabet
            index = alphabet.index(letter)
            if index + x > len(alphabet) - 1:
                index = index - len(alphabet)
            elif x < 0 and index + x < 0:
                index = len(alphabet)
        cripted = cripted + (alphabet[index + x])
    return cripted
print(cripting(rawmassage,shinfting))