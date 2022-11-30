"""One of the first known examples of encryption was used by Julius Caesar. 
Caesar needed to provide written instructions to his generals, 
but he didn’t want his enemies to learn his plans if the message slipped into their hands. 
As a result, he developed what later became known as the Caesar cipher.
The idea behind this cipher is simple (and as such, it provides no protection against modern code breaking techniques). 
Each letter in the original message is shifted by 3 places. As a result, A becomes D, B becomes E, C becomes F, D becomes G, etc.

The last three letters in the alphabet are wrapped around to the beginning: X becomes A, Y becomes B and Z becomes C. 
Non-letter characters are not modified by the cipher.
Write a program that implements a Caesar cipher. 
Allow the user to supply the message and the shift amount, and then display the shifted message. 
Ensure that your program encodes both uppercase and lowercase letters.
Your program should also support negative shift values so that it can be used both to encode messages and decode messages."""

import string

to_encrypt = input('Insert the phrase to encrypt (or decrypt) with caesar cipher: ')
shift_value = int(input('How much do you want to shift the original message? (use negative value to decrypt a message): '))

word_list = to_encrypt.split()
word = 0
shifted_list = []

# start a for loop for every word that the user want to encrypt
for element in word_list:
    letter = 0
    
    # start a for loop for every letter in every word that convert the letters into aschii code, shift and convert again into letter
    for letters in word_list[word]:
        ascii_code = ord(word_list[word][letter])

        # Shift A-Z 
        if 65 <= ascii_code <=90: 
            shifted_ashii = ascii_code + shift_value
    
            if shifted_ashii <= 90:
                shifted_list.append(chr(shifted_ashii))

            if shifted_ashii > 90:
                shifted_ashii = shifted_ashii % 90
                shifted_list.append(chr(shifted_ashii))


        # Shift a-z
        if  97 <= ascii_code <= 122:
            shifted_ashii = ascii_code + shift_value

            if shifted_ashii > 122:
                shifted_ashii = shifted_ashii % 122

            shifted_list.append(chr(shifted_ashii))
        
        # Do not shift other char
        elif (chr(ascii_code) not in string.ascii_uppercase and chr(ascii_code) not in string.ascii_lowercase):
            shifted_list.append(chr(ascii_code))

        letter += 1

    word += 1
    shifted_list.append(' ')

joined_list = ''.join(shifted_list)
print(joined_list)