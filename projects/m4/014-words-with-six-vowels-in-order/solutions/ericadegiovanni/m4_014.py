import string

"""
Find a word that contains each of the vowels A, E, I, O, U and Y exactly once and in order.
Write a program that searches a file containing a list of words and displays all of the words that meet this constraint. 
The user will provide the name of the file that will be searched.
"""
file_path = input('Insert the path of your file containing the list of words: ')
vowels = 'aeiouy'

try:
    with open(file_path, 'r') as file:
        file_words = []
        
        #process file words
        for word in file.read().split():
            for letter in word:
                if letter in string.punctuation:
                    word = word.replace(letter, "") 
            file_words.append(word.lower())

        #find the words with the vowels in order
        for word in file_words:
            vowels_tofind = 'aeiouy' 
            vowels_finded = ''
            for letter in word:
                if letter in vowels:
                    if letter == vowels_tofind[0]:
                        vowels_finded += letter
                        vowels_tofind = vowels_tofind[1:]
                        if vowels_finded == vowels:
                            print(word)

        
except FileNotFoundError:
    print('File not found, insert a correct path.')

   