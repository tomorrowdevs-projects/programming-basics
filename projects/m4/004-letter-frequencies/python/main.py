import sys
import string

def count_characters(text):
    text = text.lower()
    count_of_characters = dict()
    for character in text:
        if character in string.ascii_lowercase:
            if character not in count_of_characters:
                count_of_characters[character] = 1
            else:
                count_of_characters[character] += 1
        else:
            continue
    return count_of_characters

def letter_frequencies(dictionary):
    total_characters = sum(dictionary.values())
    keys_list = list(dictionary.keys())
    i = 0
    for key in dictionary:
        print(f"Frequence of {keys_list[i]}: {((dictionary[key]/total_characters)*100):.2f} %")
        i += 1

try:
    with open(sys.argv[1], 'r') as file:
        text = file.read()
        dictionary = count_characters(text)
        letter_frequencies(dictionary)
except FileNotFoundError:
    print("ERROR: The file doesn't exist!")
except IndexError:
    print("ERROR: Provide a file as argument in command line")