def caesar_cipher(message):
    encrypted_message = ""

    for char in message:
        if char.isalpha():
            ascii_offset = ord('A') if char.isupper() else ord('a')
            shifted_char = chr((ord(char) - ascii_offset + 3) % 26 + ascii_offset)
        else:
            shifted_char = char 

        encrypted_message += shifted_char
    return encrypted_message


message = input("Enter the message: ")
encrypted_message = caesar_cipher(message)
print("Encrypted message is: ", encrypted_message)


    
    
