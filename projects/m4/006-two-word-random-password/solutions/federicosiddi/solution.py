import sys
import random

if len(sys.argv) == 1:
    print("Please provide file to read as argument")
    quit()


password = ""
words_list = []

try:
    with open(sys.argv[1], "r") as f:
        for line in f:
            words = line.lstrip().rstrip().split(" ")
            for word in words:
                # when iterating we found a word that has length of minimum 3 letters and maximum 7 letter, we add the word to the words list
                # i've setted 7 as max len because we have a costrain of password length of maximum 10 characters
                if word.isalpha() and  3 <= len(word) <= 7:
                    words_list.append(word.lower())
except FileNotFoundError as err:
    print(err)

# here we generate a random password until one between 8 and 10 characters is found. Then we print password
while len(password) < 8 or len(password) > 10:
    password = (random.choice(words_list)).capitalize()+(random.choice(words_list)).capitalize()
print(password)
