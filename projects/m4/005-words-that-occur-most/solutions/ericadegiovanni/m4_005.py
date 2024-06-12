import sys
import string

"""
Write a program that displays the word (or words) that occur most frequently in a file.
Each line will need to be split into words, and any leading or trailing punctuation marks will need to be removed from each word. 
Your program should also ignore capitalization when counting how many times each word occurs. 
"""

if len(sys.argv) != 2:
    print('The command line argument is omitted.')
else:
    try:
        with open(sys.argv[1], 'r') as opened_file:

                #process text
                text = opened_file.read().split()
                words = [word.strip(string.punctuation).lower() for word in text]

                #count words occurence
                frequencies = dict()
                for word in words:
                    if word not in frequencies:
                        frequencies[word] = 1
                    else:
                        frequencies[word] += 1
                
                #sort the occurrencies
                list_freq = []
                for key, value in frequencies.items():
                    list_freq.append((value, key))
                    list_freq.sort(reverse = True)
                
                #display the result
                print('The most common words are:')
                for freq, word in list_freq[:5]:
                    print(f'{word}: {freq}')


    except FileNotFoundError:
        print(f'Error, the program is unable to open the file \'{sys.argv[1]}\'.') 
