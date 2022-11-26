

alpha = 'abcdefghijklmnopqrstuvwxyz'
phrase = input('Insert a message to encode / decode: ')
shift = int(input('Insert the shift amount (positive to encode, negative to decode): '))

new_phrase = ''

for i in range(len(phrase)):
    if phrase[i].lower() not in alpha:
        new_phrase += phrase[i]
        continue
    
    index_alpha = alpha.find(phrase[i].lower())
    new_index = (index_alpha + shift) % len(alpha) 
    if phrase[i].isupper():
        new_phrase += alpha[new_index].upper()
    else:
        new_phrase += alpha[new_index]

print(new_phrase)