from sys import argv
from onlywords import only_words

#creating a list that will contain all the words in the file,
#a string with all the 26 letters,
#and a dictionary that will contain in what proportion the words will use each letter.
words = []
alphabet = "abcdefghijklmnopqrstuvwxyz"
proportions = {}

try:
    #reading a list of words from a file
    with open(argv[1], "r") as file:
        for line in file:
            words_in_line = only_words(line)
            for word in words_in_line:
                word = word.lower()
                words.append(word)

    #adding in the dictionary letters and in how many words the letters are in
    for letter in alphabet:
        for word in words:
            if letter in word:
                if letter not in proportions:
                    proportions[letter] = 1
                else:
                    proportions[letter] += 1

    #determining and displaying the proportions
    total_words = len(words)
    for letter in proportions:
        percent = (proportions[letter] * 100) / total_words
        print(("The letter '{}' is present in {:.2f} % of the words") .format(letter.upper(), percent))
    
    #identifying the letter (or letters) that is used in the smallest proportion
    min_value = min(proportions.values())
    min_percent = (min_value * 100) / total_words
    print(("Letter or letters that occur in the smallest proportion ({:.2f} % of the words):") .format(min_percent))
    for letter, value in proportions.items():
        if value == min_value:
            print(("'{}'") .format(letter.upper()))

except FileNotFoundError:
    print("File not found.")
except IndexError:
    print("Wrong number of command line arguments.")