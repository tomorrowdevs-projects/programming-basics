import sys

def create_words_list(text):
    text = text.lower()
    for character in text:
        if character.isalpha() == False and character != ' ':
            text = text.replace(character, '')
    words_list = text.split()

    return words_list

def count_words(words_list):
    words_list = create_words_list(text) 
    count_of_words = dict()
    for word in words_list:
        if word not in count_of_words:
            count_of_words[word] = 1
        else:
            count_of_words[word] += 1

    return count_of_words

def words_that_occur_most(dictionary):
    max_value = max(dictionary.values())
    print('Words that occur most:')
    for word in dictionary:
        if dictionary[word] == max_value:
            print(word, dictionary[word])

try:
    with open(sys.argv[1], 'r') as file:
        text = file.read()
        words_list = create_words_list(text)
        dictionary = count_words(words_list)
        words_that_occur_most(dictionary)
except FileNotFoundError:
    print("ERROR: The file doesn't exist!")
except IndexError:
    print("ERROR: Provide a file as argument in command line")