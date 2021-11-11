alpha = 'abcdefghijklmnopqrstuvwxyz'
phrase = input('Insert a message to encode / decode: ')
shift = int(input('Insert the shift amount (positive to encode, negative to decode): '))

new_phrase = ''

for i in range(len(phrase)):
    if phrase[i].lower() not in alpha:
        new_phrase += phrase[i]
        continue
    # Find the phrase corresponding index in alpha
    index_alpha = alpha.find(phrase[i].lower())
    # Use mod to consider the cases in which (index + shift) is more than lenght of alpha
    new_index = (index_alpha + shift) % len(alpha) 
    # Convert the output in uppercase if input is uppercase
    if phrase[i].isupper():
        new_phrase += alpha[new_index].upper()
    else:
        new_phrase += alpha[new_index]

print(new_phrase)
