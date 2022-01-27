import sys
import string

"""
Determines what proportion of the words use each letter of the alphabet. 
Display this result for all 26 letters.
Include an additional message that identifies the letter that is used in the smallest proportion of the words.

"""

if len(sys.argv) != 2:
    print('You inserted the wrong number of argument.')
else:
    try:
        with open(sys.argv[1], 'r') as opened_file:

                #process text 
                text = opened_file.read().split()
                words = [word.strip(string.punctuation).lower() for word in text]

                # find tot words number
                count_words = len(words)  

                #count the total times a letter occurs in each word 
                words_freq = {chr(i): 0 for i in range(97,123)}
                for word in words:
                    for key in words_freq:
                        if key in word:
                            words_freq[key] +=1

                # count the total proportion for each letter
                words_freq = {key: round((words_freq[key] / count_words) * 100, 1) for key in words_freq}

                #display result
                lowest_proportion_key = []
                lowest_proportion = min(words_freq.values())

                print('Displaying what proportion of the words in the file use each letter:')
                for key, value in words_freq.items():
                    print(f'{key}: {value}%')

                    # find the letter (or letters) with the smallest proportion
                    if value == lowest_proportion:
                        lowest_proportion_key.append(key)
                    
                # display the lowest occurrence
                print()
                print(f'The letter used in the smallest proportion ({lowest_proportion}%):')
                for letter in lowest_proportion_key:
                    print(letter, end=' ')

    except FileNotFoundError:
        print(f'Error, the program is unable to open the file \'{sys.argv[1]}\'.')  