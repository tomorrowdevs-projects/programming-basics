from sys import argv
from onlywords import only_words

line_counter = 1
#variable that will be the last word from line
last_word = ""

try:
    with open(argv[1], "r") as file:
        for line in file:
            words = only_words(line)
            #checking if the first word of the line is the same of the last word from the previous line
            if words[0] == last_word:
                print(("The word '{}' is repeated between lines {} and {}.") .format(words[0], line_counter-1,line_counter))
            #checking if there is repeated words in the line          
            for index in range(len(words)-1):
                if words[index] == words[index + 1]:
                    print(("The word '{}' is repeated in line {}.") .format(words[index], line_counter))
            #last_word becomes the last word of the checked line
            last_word = words[-1]
            #counting the next line
            line_counter += 1
            

except FileNotFoundError:
    print("File not found.")
except IndexError:
    print("Wrong number of command line arguments.")