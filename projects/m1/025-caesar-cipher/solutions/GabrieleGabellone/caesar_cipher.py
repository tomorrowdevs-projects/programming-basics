# This program implements the Caesar Cipher.
# It allows the user to provide the message and the amount of shift.
# Negative shift values are supported so that messages can be encoded or decoded.
alphabet = "abcdefghijklmnopqrstuvwxyz"
message = str(input("Enter a message: "))
new_message = ""
shift = int(input("Enter the shift amount: "))
#I create a string with the shifted alphabet depending on the input shift
shifted_alphabet = alphabet[shift:] + alphabet[0:shift]
for character in message:
    if character.lower() in alphabet: 
        #if the character is present in the string "alphabet" I assign its position to "i"
        i = alphabet.index(character.lower()) 
        if character.islower(): 
            new_message = new_message + shifted_alphabet[i]
        else: new_message = new_message + shifted_alphabet[i].upper()
    else: new_message = new_message + character
print(new_message)
