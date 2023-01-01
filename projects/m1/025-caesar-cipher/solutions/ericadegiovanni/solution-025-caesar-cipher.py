
# Write a program that implements a Caesar cipher. 
# each letter is shifted by x positions.

# The last three letters in the alphabet are wrapped around to the beginning(modulus)

# Allow the user to supply the message and the shift amount
original_message = input('Insert a message: ')
shifted_message = ''
shift = int(input('Insert the shift amount: '))

for i in original_message:
    
    #65 to 90 uppercase ascii unicode letters
    if 64 < ord(i) < 91:  
      shifted_message += chr((ord(i) + shift - 65) % 26 + 65)
    #97 to 122 lowercase ascii unicode letters
    elif 96 < ord(i) < 123 :
      shifted_message += chr((ord(i) + shift - 97) % 26 + 97)
    #Non-letter characters are not modified by the cipher.
    else:
      shifted_message += i
        
print(f'The shifted message is: {shifted_message}.')

    