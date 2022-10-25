
print('Enter the message in Uppercase to encode it or lowercase to decode it. ')
text = input('')
shift = int(input('Choose the shift amount'))
encryption = ""


for letter in text:
    if letter.isupper():
        letter_index = ord(letter) - ord('A')               # funzione 'ord' ritorna la posizione in numero nella tabella dei caratteri
        letter_num = (letter_index + shift) % 26
        new_letter = letter_num + ord('A')
        character = chr(new_letter)                         # funzione 'chr' fa il contrario di 'ord'
        encryption = encryption + character
    elif letter.islower():
        letter_index = ord(letter) - ord('a')
        letter_num = (letter_index - shift) % 26
        new_letter = letter_num + ord('a')
        character = chr(new_letter)
        encryption = encryption + character

    else:
        encryption += letter


print('The plain text:',text)
print("Encrypted text:",encryption)