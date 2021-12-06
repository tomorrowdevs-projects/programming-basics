import string
import sys
try:
    with open(sys.argv[1]) as reader:
            word_frequencies = {}
            for line in reader:
                for word in line.split():
                        #Strip every punctuation, digits, and whitespace character from word
                        word = word.strip(string.punctuation + string.digits +\
                        string.whitespace + '—')
                        #Populate a dictionary whit words as keys and their repetition times as values
                        word_frequencies[word.lower()] =\
                            word_frequencies.get(word.lower(), 0) + 1
            #Create another dictionary inserting keys in descending order based on their values
            #using a lambda as key parameter in the sorted function
            ordered_word_freq = {k :v for k,v in\
                sorted(word_frequencies.items(),\
                key=lambda item: item[1], reverse=True)}
            max_freq = 0
            for k,v in ordered_word_freq.items():
                if ordered_word_freq[k] >= max_freq:
                    max_freq = ordered_word_freq[k]
                    print(f"The most frequent word is '{k}'"
                    f" repeated {v} times")
                else:
                    break

except FileNotFoundError as fnf_error:
    print(fnf_error)
    print("File doesn't exist or wrong path")
except IndexError as idx_error:
    print(idx_error)
    print("Enter a file as argument.")
else:
    if len(sys.argv) < 2:
        print("Enter a file as argument") 