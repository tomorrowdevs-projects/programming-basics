import sys
import string
import random

"""
Write a program that reads a file containing a list of words, randomly selects two
of them, and concatenates them to produce a new password. 
Yhe total length must be between 8 and 10 characters, and each word used is at least three letters long. 
Capitalize each word in the password.
"""

MIN_LEN = 8
MAX_LEN = 10

if len(sys.argv) != 2:
    print('You inserted the wrong number of argument.')
else:
    try:
        with open(sys.argv[1], 'r') as opened_file:

                #process text and create the list of words with 3 <= length <= 7
                text = opened_file.read().split()
                words = [word.strip(string.punctuation).capitalize() for word in text if 3 <= len(word) <= 7 ]

                #create password
                psw = random.choice(words)
                words = [word for word in words if MIN_LEN - len(psw) <= len(word) <= MAX_LEN - len(psw) ]
                psw += random.choice(words)
                
                #display result
                print(f'Your password is {psw}.')
                
    except FileNotFoundError:
        print(f'Error, the program is unable to open the file \'{sys.argv[1]}\'.') 
        