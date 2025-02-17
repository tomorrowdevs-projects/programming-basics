# Caesar Cipher

# One of the first known examples of encryption was used by Julius Caesar. 
# Caesar needed to provide written instructions to his generals,
# but he didn’t want his enemies to learn his plans if the message slipped into their hands.
# As a result, he developed what later became known as the Caesar cipher.
# The idea behind this cipher is simple
# (and as such, it provides no protection against modern code breaking techniques).
# Each letter in the original message is shifted by 3 places.
# As a result, A becomes D, B becomes E, C becomes F, D becomes G, etc.

# The last three letters in the alphabet are wrapped around to the beginning: X becomes A, Y becomes B and Z becomes C.
# Non-letter characters are not modified by the cipher.
# Write a program that implements a Caesar cipher.
# Allow the user to supply the message and the shift amount, and then display the shifted message.
# Ensure that your program encodes both uppercase and lowercase letters.
# Your program should also support negative shift values so that it can be used both
# to encode messages and decode messages.

# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **2 hours**

message = input("Enter the message: ")

def ascii_cypher(string, shift=3):
    final_message = ""
    for i in string:
        if 97 <= ord(i) <= 119:
            final_message += chr(ord(i) + shift)
        elif 120 <= ord(i) <= 122:
            final_message += chr(ord(i) - (26 - shift))
        elif 65 <= ord(i) <= 87:
            final_message += chr(ord(i) + shift)
        elif 88 <= ord(i) <= 90:
            final_message += chr(ord(i) - (26 - shift))
        else:
            final_message += i

    return final_message

encripted = ascii_cypher(message)
print("encripted = {}".format(encripted))