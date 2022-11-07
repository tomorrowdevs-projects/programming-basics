def text_messaging(text):
    text = text.upper()
    letters_keys = {
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

    result = ''
    for letter in text:   
        for k in letters_keys:       
            if letter in letters_keys[k] :
                letter_index = letters_keys[k].index(letter)
                # Multiply the key by its index, turning the first index into 1
                result += k * (letter_index + 1)   
    return result  
            
def main():
    text = input('Enter text: ')
    print(text_messaging(text))

if __name__ == "__main__":
    main()