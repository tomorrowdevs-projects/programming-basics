import sys

from solution_only_the_words import only_words

if sys.argv[1:] == []:
    print("Missing argument! Enter at least one file name on the command line.")
else:
    for argument in sys.argv[1:]:
        try:
            with open(argument) as file:
                word_counter = {}
                for line in file:
                    extracted_words = only_words(line)
                    for word in extracted_words:
                        if word not in word_counter:
                            word_counter[word] = 1
                        else:
                            word_counter[word] += 1

            all_values = sorted(set(word_counter.values()))
            all_values.reverse()

            print("\nWords that occur most frequently in the file '{}':".format(argument))
            for value in all_values:
                word_list = ""
                for item in word_counter.items():
                    if item[1] == value:
                        if word_list == "":
                            word_list = item[0]
                        else:
                            word_list += ", {}".format(item[0])
                if value > 1:
                    print("- {} times: {}.".format(value, word_list))
                else:
                    print("- {} time: {}.".format(value, word_list))
    
        except FileNotFoundError:
            print("\nError! File '{}' not found.".format(argument))
        except:
            print("\nError! File '{}' could not be opened, make sure it is not a folder.".format(argument))