import sys

vowels_lst = ["a", "e", "i", "o", "u", "y"]
words_vowels = []
try:
    with open(sys.argv[1]) as f:
        for line in f:
            line_lst = line.strip().split()
            for line_words in line_lst:
                # using again the split method if there are more than one word on the line.
                word = line_words.strip().split()
                # previus_index is used for check if the order of the vowels in the word
                # is alphabetically correct.
                previus_index = 0
                #count is used to count every unique vowel in word,
                # if in alphabetical order with the previus vowel
                count = 0
                if len(word[0]) >= len(vowels_lst):
                    for i in range(len(word[0])):
                        #If character aty index i, in word, is in vowels list 
                        #and isn't repeated it store the corresponding index in vowels_lst
                        if word[0][i] in vowels_lst and\
                             word[0].count(word[0][i]) < 2:
                            index = vowels_lst.index(word[0][i])
                            if index >= previus_index:
                                count += 1
                                previus_index = index
                            else:
                                break
                    if count >= len(vowels_lst):
                        words_vowels.append(word[0])
except FileNotFoundError:
    print("File not found")
except IndexError:
    print("Missing argument")
else:
    if words_vowels:
        print("Words with all the six vowels in order:")
        for word in words_vowels:
            print(word)
    else:
        print("There aren't words with all six vowels in the file.")    