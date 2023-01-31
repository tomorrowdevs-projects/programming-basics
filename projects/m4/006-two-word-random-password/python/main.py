from sys import argv
from random import sample
from onlywords import only_words

words_for_pw = []    #creating an empty list to put in all the words that can be used to create two-word password.
password = ""    #creating an empty string that will be the password later.

try:
    with open(argv[1], "r") as file:
        for line in file:
            line_list = only_words(line)
            for word in line_list:
                if word.isalpha() and len(word) > 2:    #if the word contains all alphabetical characters and the length of word is 3 or more
                    word = word.capitalize()    #each word used for the password must be capitalized.
                    if word not in words_for_pw:
                        words_for_pw.append(word)

    #creating the password and displaying it. (the password will be created in a while loop, means that the password will be updated until the lenght is between 8 and 10.)    
    while True:
        two_word = sample(words_for_pw, k=2)    #sample will pick k random elements from given list.
        password += two_word[0]+two_word[1]    #concatenating the two words obtained with "random.sample".
        if 8 <= len(password) <= 10:
            break
        else:
            password = ""    #if the lenght isn't between 8 and 10, then the password will be created again from 0.
    print(("Your two-word password is: {}") .format(password))

except FileNotFoundError:
    print("File not found.")
except IndexError:
    print("Wrong number of command line arguments.")