import sys
import string

if len(sys.argv) == 1:
    print("Please provide file to read as argument")
    quit()

# Counter for lines in text file
line_count = 1
# variable used to compare a word with the previous one
prev_word = ""

try:
    with open(sys.argv[1], "r") as f:
        for line in f:
            words = line.lstrip().rstrip().split(" ")
            for word in words:
                # stripping punctuation from each word
                word = word.translate(str.maketrans('', '', string.punctuation))
                # if a word is equal to the previous memorized word and contains letters, we have found a repeated word
                # i have used isalpha() because we can find numbers that repeats in telephone numbers like " 334 44 44 752 ". This isn't a repeated word.
                if word.lower() == prev_word and word.isalpha():
                    print(f"Word '{word}' repeated in line {line_count}")
                # here we set the previous word value to the value of the actual word
                prev_word = word.lower()
            line_count += 1    
except FileNotFoundError as err:
    print(err)
