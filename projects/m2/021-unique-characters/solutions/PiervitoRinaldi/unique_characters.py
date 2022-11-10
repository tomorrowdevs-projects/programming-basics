# Create a dictionary where the characters are the keys, and the values correspond how many times a character appears.
# At the end, the function return the number of unique characters in a text entered by the user. 
def unique_characters(text):    
    count_of_characters = dict()
    for character in text:
        if character not in count_of_characters:
            count_of_characters[character] = 1
        else:
            count_of_characters[character] += 1

    n_unique_character = f'Your text has {len(count_of_characters)} unique characters!'

    return n_unique_character

def main():
    text = input('Enter text to display the number of unique characters: ')
    print(unique_characters(text))

if __name__ == '__main__':
    main()


    

