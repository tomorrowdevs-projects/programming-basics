import string
import sys

ALPHABET = list(string.ascii_lowercase)
letters = {}
words_count = 0

try:
    with open(sys.argv[1]) as reader:
        for line in reader:
            for word in line.split():
                words_count += 1
                word = word.strip(string.punctuation + \
                string.whitespace + string.digits)
                word = word.lower()
                #iterate over the alphabet list and checking if the character is used in word
                for char in ALPHABET:
                    if char in word:
                        #if the character is in word it is added to the dictionary of letters as a key 
                        #else , if the key is already in the dictionary, is value is incremented by one.
                        letters[char] = letters.get(char, 0) + 1
        #populate a list with all key value pairs as tuples sorted in descending order
        ordered_letters = [(k,v) for k,v in sorted(letters.items(),\
            key=lambda item:item[1], reverse=True)]
        
except FileNotFoundError as fnf_error:
        print(fnf_error)
        print("File doesn't exist or wrong path")
except IndexError as idx_error:
        print(idx_error)
        print("No file as entered as argument.")
else:
    print(f"Letter: frequency(on a total of {words_count} words) ")
    for word, freq in ordered_letters:
        print(f"'{word}': {(freq/words_count)*100:.2f}%")
    print(f"The least used letter is: {ordered_letters[-1][0]}")