alphabet = "abcdefghijklmnopqrstuvwxyz"

def cipher(target, shift):
    for index in range(len(alphabet)):
        if alphabet[index] == target:
            x = index + shift
            y =  x % len(alphabet)
            return (alphabet[y])

string = input("Enter a message to encrypt or decrypt: ")
shift = int(input("Enter the shift amount: "))

encrypted_string = ""
for x in string:
    if x == " ":
        encrypted_string += " "
    else:
        encrypted_string += cipher(x, shift)

print(encrypted_string)

