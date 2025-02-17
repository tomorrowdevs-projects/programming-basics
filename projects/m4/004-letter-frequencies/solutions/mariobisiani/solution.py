#script that count the frequencies of letters in a file passed as argoument, case insensitive and ignoring punctuation

import sys
import json

#initialize an empty dict
dict_letters = {}

#function to get frequecy of letters
def frequency(args):
    f = open(args[1],'r')
    list_of_words = f.readlines()
    
    for word in list_of_words:
        for letter in word:
            #case insensitive
            letter = letter.lower()
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
        frequency(sys.argv)
        
    except:
        print('File doesn\'t exist or argoument is null.') 

print(json.dumps(dict_letters, indent = 4))