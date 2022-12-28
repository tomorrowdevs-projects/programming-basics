import sys
import random

from solution_only_the_words import only_words

if not len(sys.argv) == 2:
    print("Error! Argument missing or more than one argument entered on the command line.")
else:
    try:
        with open(sys.argv[1]) as file:
            text = file.read().lower()
            extracted_words = only_words(text)
            is_valid_password = False

            while not is_valid_password:
                is_valid_word1, is_valid_word2 = False, False
                while not is_valid_word1:
                    first_word = random.choice(extracted_words).capitalize()
                    if len(first_word) >= 3:
                        is_valid_word1 = True
                while not is_valid_word2:
                    second_word = random.choice(extracted_words).capitalize()
                    if len(second_word) >= 3:
                        is_valid_word2 = True
                password = first_word + second_word
                if len(password) in range(8,11):
                    is_valid_password = True
            print("Generated password: ", password)

    except FileNotFoundError:
        print("Error! File '{}' not found.".format(sys.argv[1]))
    except:
        print("Error! File '{}' could not be opened, make sure it is not a folder.".format(sys.argv[1]))