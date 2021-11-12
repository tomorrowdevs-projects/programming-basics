msg = input("Enter message: ")

phone_keys = {
    '1': ['.', ',', '?', '!', ':'], 
    '2': ['A', 'B', 'C'], 
    '3': ['D', 'E', 'F'],
    '4': ['G', 'H', 'I'],
    '5': ['J', 'K', 'L'],
    '6': ['M', 'N', 'O'],
    '7': ['P', 'Q', 'R', 'S'],
    '8': ['T', 'U', 'V'],
    '9': ['W', 'X', 'Y' ,'Z'],
    '0': [' ']
    }
total_presses = ""
for c in range(0,len(msg)):
    for key in phone_keys:
        if msg[c].upper() in phone_keys[key]:
            char_index = phone_keys[key].index(msg[c].upper())
            key_press = key * (char_index + 1)
            total_presses += key_press
print(f"Total key presses: {total_presses}")