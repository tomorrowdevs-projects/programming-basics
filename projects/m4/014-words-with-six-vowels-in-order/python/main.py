import sys

from solution_only_the_words import only_words

def is_a_six_vowel_word(word: str) -> bool:
    """Takes a string, returns True if the string contains each of the vowels a, e, i, o, u and y exactly once and in order."""
    vowels = "aeiouy"
    vowels_in_word = ""
    for character in word:
        if character in vowels:
            vowels_in_word += character
    if vowels_in_word == "aeiouy":
        return True


if sys.argv[1:] == []:
    print("Missing argument! Enter at least one file name on the command line.")
else:
    for argument in sys.argv[1:]:
        try:
            with open(argument) as file:
                extracted_words = only_words(file.read())
                word_with_six_vowels = []
                for word in extracted_words:
                    if is_a_six_vowel_word(word):
                        word_with_six_vowels.append(word)

            if len(word_with_six_vowels) == 0:
                print("\nIn the file '{}' no words with six vowels and in order were found.".format(argument))
            elif len(word_with_six_vowels) == 1:
                print("\nIn the file '{}' a word with six vowels and in order was found: {}.".format(argument, word_with_six_vowels[0]))
            else:
                word_list = word_with_six_vowels[0]
                for word in word_with_six_vowels[1:]:
                    word_list += ", {}".format(word)
                print("\nIn the file '{}' {} words with six vowels and in order were found: {}.".format(argument, len(word_with_six_vowels), word_list))
                
        except FileNotFoundError:
            print("\nError! File '{}' not found.".format(argument))
        except:
            print("\nError! File '{}' could not be opened, make sure it is not a folder.".format(argument))