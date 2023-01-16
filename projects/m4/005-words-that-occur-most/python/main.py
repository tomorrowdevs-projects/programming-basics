import sys

def count_words(text):
    text = text.lower() + ' '       # I add a whitespace, to count also the last word
    count_of_words = dict()
    word = ""
    print(text)
    for character in text:
        if character.isalpha() == True:
            word += character
        elif character.isalpha() == False:
            if word.isalpha() == True:      # It avoid whitespace will be counted
                if word not in count_of_words:
                    count_of_words[word] = 1
                    word = ""
                else:
                    count_of_words[word] += 1
                    word = ""
            else:
                continue
    return count_of_words

def words_frequencies(dictionary):
    max_value = max(dictionary.values())
    for word in dictionary:
        if dictionary[word] == max_value:
            print(word, dictionary[word])

try:
    with open(sys.argv[1], 'r') as file:
        text = file.read()
        dictionary = count_words(text)
        words_frequencies(dictionary)
except FileNotFoundError:
    print("ERROR: The file doesn't exist!")
except IndexError:
    print("ERROR: Provide a file as argument in command line")