alphabet = "abcdefghijklmnopqrstuvwxyz"

word = input("Enter word: ")
shift = int(input("Enter shift: "))
encoded_word = ""

if shift >= 0:
    for letter in word:
        index = alphabet.find(letter.lower())
        encoded_letter = alphabet[(index + shift) % len(alphabet)]
       
        if letter.islower() and index != -1:
            encoded_word += encoded_letter.lower()
        if letter.isupper() and index != -1:
            encoded_word += encoded_letter.upper()
        if index == -1:
            encoded_letter = letter
            encoded_word += letter      
    print(encoded_word)
else:
    for letter in word:
        index = alphabet.find(letter.lower())
        encoded_letter = alphabet[index - (abs(shift) % len(alphabet))]
       
        if letter.islower() and index != -1:
            encoded_word += encoded_letter.lower()
        if letter.isupper() and index != -1:
            encoded_word += encoded_letter.upper()
        if index == -1:
            encoded_letter = letter
            encoded_word += letter   
    print(encoded_word)