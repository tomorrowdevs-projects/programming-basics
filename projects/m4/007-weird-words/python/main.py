import sys

from solution_only_the_words import only_words

def is_regular(word: "str")-> bool:
    """Takes a word, returns True if it follows the rule 'I before E except after C'."""
    if "cei" in word or "ie" in word:
        return True
    else:
        return False


if sys.argv[1:] == []:
    print("Missing argument! Enter at least one file name on the command line.")
else:
    for argument in sys.argv[1:]:
        try:
            with open(argument, encoding="utf8") as file:
                extracted_words = []
                regular_words = set()
                irregular_words = set()

                for line in file:
                    extracted_words += only_words(line.strip())

                for word in extracted_words:
                    if "ei" in word or "ie" in word:
                        if is_regular(word):
                            regular_words.add(word)
                        else:
                            irregular_words.add(word)

                print("\nIn the text inside the file '{}':".format(argument))    
                print("-{} words respect the rule:\n{}".format(len(regular_words), regular_words))
                print("-{} words do not respect the rule:\n{}".format(len(irregular_words), irregular_words))
        
        except FileNotFoundError:
            print("\nError! File '{}' not found.".format(argument))
        except:
            print("\nError! File '{}' could not be opened, make sure it is not a folder.".format(argument))