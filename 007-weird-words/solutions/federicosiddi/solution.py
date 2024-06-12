import sys

if len(sys.argv) == 1:
    print("Please provide file to read as argument")
    quit()
# list containing words that have i and e adjacent in this order ie
ie_word_list = []
# list containing words that have e and i adjacent in this order ei
ei_word_list = []
# false_words will contain words that don't follows the rule explained in the readme file, we will use these lists for storing the results
false_words = []
# true_words will contain all the words that follows the rule
true_words = []

try:
    with open(sys.argv[1], "r") as f:
        for line in f:
            words = line.lstrip().rstrip().split(" ")
            for word in words:
                word = word.lower()
                # all the words containing "ie" or "ei" will be added to their respective lists
                if word.isalpha() and "ie" in word:
                    if word not in ie_word_list:
                        ie_word_list.append(word)
                if word.isalpha() and "ei" in word:     
                    if word not in ei_word_list:
                        ei_word_list.append(word)
    
    for word in ei_word_list:
        # here we obtain the index of the string where starts the "ei" part
        index = word.index("ei")
        # we check if the letter preceding ei part is a "c"
        if word[index - 1] != "c":
            false_words.append(word)
        else:
            true_words.append(word)

    for word in ie_word_list:
        # here we obtain the index of the string where starts the "ie" part
        index = word.index("ie")
        # we check if the letter preceding ei part is a "c"
        if word[index - 1] == "c":
            false_words.append(word)
        else:
            true_words.append(word)

    print(false_words)
    print(f"{len(false_words)} words don't follow the “I before E except after C” rule")
    print(true_words)
    print(f"{len(true_words)} words follow the “I before E except after C” rule")

except FileNotFoundError as err:
    print(err)

