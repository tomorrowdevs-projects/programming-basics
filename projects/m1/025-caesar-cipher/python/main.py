import string

message = input("Insert the message ")
shift_amount = int(input("Shift amount "))
message_encrypted = ""

alphabet_lower = string.ascii_lowercase
alphabet_upper = string.ascii_uppercase

for char in message:
    if char.isupper():
        index = alphabet_upper.find(char)
    else:
        index = alphabet_lower.find(char)
    if index == -1:
        message_encrypted += char
    else:
        real_shift = index + shift_amount
        if real_shift>=len(alphabet_upper):
                real_shift = real_shift - len(alphabet_upper)
        if char.isupper():
            message_encrypted += alphabet_upper[real_shift]
        else:
            message_encrypted += alphabet_lower[real_shift]

print(message_encrypted)