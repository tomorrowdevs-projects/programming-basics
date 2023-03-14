import sys
import string

def create_words_list(text):
    text = text.lower()
    for character in text:
        if character.isalpha() == False and character != ' ':
            text = text.replace(character, '')
    words_list = text.split()

    return words_list

def count_letters_in_words(words_list):
    # Create a dictionary where the keys are each letter of the alphabet, the values are in how many words appear that letter
    letter_word = dict.fromkeys(list(string.ascii_lowercase), 0)
    x = ''
    for word in words_list:
        for letter in word:
            if letter not in letter_word.keys():
                continue
            else:
                if letter not in x:
                    x += letter
        for letter in x:
            letter_word[letter] += 1
        x = ''

    return letter_word


try:
    with open(sys.argv[1], 'r') as file:
        text = file.read()
        words_list = create_words_list(text)
        letter_word = count_letters_in_words(words_list)

        print(f'Text word list: {words_list}')
        print('Percentage of words that contain a particular letter:')

        min_percentage = 100
        for key in letter_word:
            percentage = letter_word[key] / len(words_list) * 100
            print(f"{key}--->", f"{percentage:>5.2f} %")
            if percentage < min_percentage and percentage != 0:
                min_percentage = percentage
                corresponding_letter = key
            elif percentage == min_percentage:
                corresponding_letter += ', ' + key
        
        print(f"The letter/s '{corresponding_letter}' is/are used in the smallest proportion of the words: {min_percentage:.2f} %")

except FileNotFoundError:
    print("ERROR: The file doesn't exist!")
except IndexError:
    print("ERROR: Provide a file as argument in command line")