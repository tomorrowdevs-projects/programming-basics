import sys
import string

if len(sys.argv) == 1:
    print("Please provide file to read as argument")
    quit()

# we create a dict with all the letters of alphabeth initialized with value of 0
char_dict = {char:0 for char in list(string.ascii_uppercase)}
# we will need this counter later when we have to calculate the percentage a specific letter is present in the total number of words analyzed 
word_count = 0

try:
    with open(sys.argv[1], "r") as f:
        for line in f:
            words = line.lstrip().rstrip().split(" ")
            for word in words:
                # we use this list to add letters that form the word
                single_letters = []
                for char in word:
                    # if it's the first time we read the current letter, we add it in the single_letters list
                    # if it's already present we skip to the next letter
                    if char.upper() not in single_letters and char.isalpha():
                        single_letters.append(char.upper())
                # for every unique letter contained in the previous word, we increment the value of it in the char_dict
                for char in single_letters:
                    char_dict[char.upper()]+=1
                word_count += 1
    last_letter = min(char_dict.values())
    for ch in sorted(char_dict):
        # if the value of the current character is equal to the lowest value in dict, we have found the least used letter in all the words
        if char_dict[ch] == last_letter:
            last_letter = ch
        percentage = (char_dict[ch] / word_count) * 100
        print(f"{ch} is present in {round(percentage, 2)} % of words")

except FileNotFoundError as err:
    print(err)

print(f"The letter that is used in the smallest proportion of words is: {last_letter}")
