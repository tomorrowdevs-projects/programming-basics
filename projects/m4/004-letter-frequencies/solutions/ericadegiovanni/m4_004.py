import sys

"""
Write a program that display the frequencies of all of the letters in a file.
Ignore spaces, punctuation marks, and digits as you perform this analysis. 
The user will provide the name of the file to analyze as a command line argument. 

Display an error message if the user provides the wrong number of command line arguments, 
or if the program is unable to open the file indicated by the user.

"""


if len(sys.argv) != 2:
    print('The command line argument is omitted.')
else:
    try:
        with open(sys.argv[1], 'r') as text:
            frequencies = dict()

            for letter in text.read():
                letter = letter.lower()
                if letter.isalpha():
                    if letter not in frequencies:
                        frequencies[letter] = 1
                    else:
                        frequencies[letter] += 1

            print(f'Letters frequency in \'{sys.argv[1]}\':')
            for letter in sorted(frequencies):
                print(f'{letter}: {frequencies[letter]}')

    except FileNotFoundError:
        print(f'Error, the program is unable to open the file {sys.argv[1]}')