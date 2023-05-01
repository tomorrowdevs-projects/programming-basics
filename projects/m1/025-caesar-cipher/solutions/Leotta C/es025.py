alphabet = "abcdefghijklmnopqrstuvwxyz"
message = input("Enter your message: ")
a = int(input("Enter the shift value: "))


def shift(letter):
    for i in range(len(alphabet)):
        if alphabet[i] == letter:
            return alphabet[(i + a) % 26]
        elif alphabet[i] == letter.lower() :
            return alphabet[(i + a) % 26].upper()
    return letter


for i in range(len(message)):
    print(shift(message[i]), end="")

