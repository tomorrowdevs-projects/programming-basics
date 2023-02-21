import sys
import random

def create_words_list_length_major_trhee(text):
    text = text.lower()
    for character in text:
        if character.isalpha() == False and character != ' ':
            text = text.replace(character, '')
    words_list = text.split()
    for word in words_list:
        if len(word) <= 3:
            words_list.remove(word)
    
    return words_list

def crate_pass(words_list):
    password = ""
    while len(password) < 8 or len(password) > 10:
        choice_words = random.sample(words_list, k = 2)
        password = choice_words[0].capitalize() + choice_words[1].capitalize()
    
    return password

try:
    with open(sys.argv[1], 'r') as file:
        text = file.read()
        password = crate_pass(create_words_list_length_major_trhee(text))
        print(f"Password: {password}")

except FileNotFoundError:
    print("ERROR: The file doesn't exist!")
except IndexError:
    print("ERROR: Provide a file as argument in command line")