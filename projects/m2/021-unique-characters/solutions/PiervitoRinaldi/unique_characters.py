# Create a dictionary where the characters are the keys, and the values correspond how many times a character appears.
# At the end, the function return the number of unique characters in a text entered by the user. 
def count_characters(text):    
    count_of_characters = dict()
    for character in text:
        if character not in count_of_characters:
            count_of_characters[character] = 1
        else:
            count_of_characters[character] += 1

    return count_of_characters

def unique_character(text):
    n_unique_character = len(count_characters(text))
    result = f'Your text has {n_unique_character} unique characters!'

    return result

def main():
    text = input('Enter text to display the number of unique characters: ')
    print(unique_character(text))

if __name__ == "__main__":
    main()




    

