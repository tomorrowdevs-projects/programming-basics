import sys

if len(sys.argv) == 1:
    print("Please provide file to read as argument")
    quit()

words_dictionary = {}

try:
    with open(sys.argv[1], "r") as f:
        for line in f:
            word_list = line.lstrip().rstrip().split(" ")
            for word in word_list:
                word = word.lower()
                if word.isalpha():
                    if word not in words_dictionary:
                        words_dictionary[word] = 1
                    else:
                        words_dictionary[word] += 1
        # list comprehension that will create a last containing words that match the max value of the max values of words words_dictionary
        most_frequent_words = [key  for (key, value) in words_dictionary.items() if value == max(words_dictionary.values())]
        for word in most_frequent_words:
            print(f"Word '{word}' counted {words_dictionary[word]} times")

except FileNotFoundError as err:
    print(err)