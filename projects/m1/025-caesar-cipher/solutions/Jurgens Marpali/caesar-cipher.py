alphabet = 'abcdefghijklmnopqrstuvwxyz'

msg = input("Enter the message you want to cipher: ")
shift = int(input("Enter the shift: "))
new_msg = ""
#Uppercase letters in ascii from 65 to 90
#Lowercase letters in ascii from 97 to 122
#ord function returns an integer representing the unicode
#character
#chr returns a string from an integer

for x in msg:
    if 64 < ord(x) < 91:
        new_msg += chr((ord(x) + shift - 65) % 26 + 65)
    elif 96 < ord(x) < 123:
        new_msg += chr((ord(x) + shift -97) %26 + 97)
    else:
        new_msg += x
print("Your ciphered message is ", new_msg, ".")
