import sys

if sys.argv[1:] == []:
    print("Missing argument! Enter at least one file name on the command line.")
else:
    for argument in sys.argv[1:]:
        letter_frequencies = {}

        try:
            with open(argument) as file:
                text = file.read().lower()
                for character in text:
                    if character.isalpha():
                        if character not in letter_frequencies:
                            letter_frequencies[character] = 1
                        else:
                            letter_frequencies[character] += 1
                print("Letters present in the file '{}': {}".format(argument, letter_frequencies))

        except FileNotFoundError:
            print("Error! File '{}' not found.".format(argument))
        except:
            print("Error! File '{}' could not be opened, make sure it is not a folder.".format(argument))