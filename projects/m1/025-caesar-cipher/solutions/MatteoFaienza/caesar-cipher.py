# This program implements a Caesar cipher.
# The idea behind this cipher is simple .Each letter in the original message is shifted by (n) places.

alphabet_lower ='abcdefghijklmnopqrstuvwxyz'
alphabet_upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

user_phrase = input('Enter the phrase to encrypt: ')
user_move_letter_numnber = int(input('Enter the number for moving: '))
new_prase = ''

for letter in user_phrase :
     if letter in alphabet_lower :
        origin_index= alphabet_lower.index(letter)
        new_index = (origin_index + user_move_letter_numnber) % 26
        new_letter = alphabet_lower[new_index]
        new_prase += new_letter

     elif letter in alphabet_upper :
         origin_index= alphabet_upper.index(letter)
         new_index = (origin_index + user_move_letter_numnber) % 26
         new_letter = alphabet_upper[new_index]
         new_prase += new_letter

     else :
         new_prase += letter

print(new_prase) 