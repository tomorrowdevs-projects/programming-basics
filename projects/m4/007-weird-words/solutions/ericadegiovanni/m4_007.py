import sys
import string

"""
Create a program that processes a file containing lines of text. 
Determine whether or not words with an adjacent E and I (or I and E)  they follow the “I before E except after C” rule. 

Construct and report two lists:
One that contains all of the words that follow the rule,
one that contains all of the words that violate the rule. 
Report the lengths of the lists at the end of your program.
"""

if len(sys.argv) != 2:
    print('You inserted the wrong number of argument.')
else:
    try:
        with open(sys.argv[1], 'r') as opened_file:

                #process text 
                text = opened_file.read().split()
                words = [word.strip(string.punctuation).lower() for word in text]
                
                follow = []
                no_follow = []
                
                # determine if the conditions are respected
                for word in words:
                    if 'ie' in word or 'ei' in word:
                        if ('ie' in word and word.index('ie') -1 != 'c' or
                        'cei' in word):
                            follow.append(word)
                        else:
                            no_follow.append(word)
                            
                #display result
                print(f'Number of words that respect the “I before E except after C” rule: {len(set(follow))}.')
                print(f'Number of words that don\'t respect the “I before E except after C” rule: {len(set(no_follow))}.')
            

    except FileNotFoundError:
        print(f'Error, the program is unable to open the file \'{sys.argv[1]}\'.') 