#script that display the most used word in a file passed as argoument, case insensitive and ignoring punctuation

import sys
import json
import string

#function to flatten list
def flatten(input_list):
    if len(input_list) == 0:
        return input_list
    
    if (type(input_list[0])) == list:
        flattened_list = flatten(input_list[0]) + flatten(input_list[1:])
        return flattened_list
     
    return input_list[:1] + flatten(input_list[1:])

#initialize an empty dict
dict_letters = {}

#function to get frequecy of letters
def mostOccur(args):
    u = []
    f = open(args[1],'r')
    list_of_words = f.readlines()
    for y in list_of_words:
            u.append(y.split())
    
    list_of_words_flattened = flatten(u)

    for letter in list_of_words_flattened:
        #case insensitive
        letter = letter.lower()
        #remove punctuation
        letter = letter.translate(str.maketrans('', '', string.punctuation))
        #pass if a letter is not an alphabetic char
        if not letter.isalpha():
            pass
        #increase frequency if char exist
        elif letter in dict_letters:
            dict_letters[letter] = dict_letters[letter] + 1
        #append new key if letter doesn't exist
        else:
            dict_letters[letter] = 1
    f.close()
    return dict_letters
        
#call function for second argument of bash's prompt if file exist
if __name__ == '__main__':
    try:
        mostOccur(sys.argv)
    except:
        print('File doesn\'t exist or argoument is null.') 

#most occur in dict
most_occur_dict = max(dict_letters, key=dict_letters.get)

#pretty print with json
print(json.dumps(most_occur_dict, indent = 4))