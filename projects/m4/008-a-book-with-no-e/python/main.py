import sys

from solution_only_the_words import only_words

if sys.argv[1:] == []:
    print("Missing argument! Enter at least one file name on the command line.")
else:
    for argument in sys.argv[1:]:
        try:
            with open(argument, encoding="utf8") as file:
                text = file.read()
                extracted_words = only_words(text)
                letter_counter = {}
                word_index = 0

                for word in extracted_words:
                    for letter in word:
                        if letter not in letter_counter.keys():
                            letter_counter[letter] = 1
                            if not word_index == len(extracted_words)-1:
                                for next_word in extracted_words[word_index + 1:]:
                                    if letter in next_word:
                                        letter_counter[letter] += 1
                    word_index += 1
                
                all_values = sorted(set(letter_counter.values()))
                all_values.reverse()

                print("\nIn the file '{}' there are {} words, proportionally they are:".format(argument, word_index))
                for value in all_values:
                    letter_list = ""
                    for item in letter_counter.items():
                        if item[1] == value:
                            if letter_list == "":
                                letter_list = item[0]
                            else:
                                letter_list += ", {}".format(item[0])
                    proportion = (value / word_index) * 100   
                    print("{:.2f} %: {}".format(proportion, letter_list))

                if len(letter_list) == 1:
                    print(letter_list, "is the letter that was used in the smallest proportion of the words.")
                else:
                    print(letter_list, "are the letters that have been used in the smallest proportion of the words.")

        except FileNotFoundError:
            print("\nError! File '{}' not found.".format(argument))
        except:
            print("\nError! File '{}' could not be opened, make sure it is not a folder.".format(argument))