message = input('insert a message to encode or decode: ')
number = int(input('insert a positive number to encode or negative to decode: '))

ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
new_message = ''


for i in message:
    for e in ALPHABET:
        if e == i:
            index = ALPHABET.index(e) 
            new_message += ALPHABET[index + number]
                
print(new_message)