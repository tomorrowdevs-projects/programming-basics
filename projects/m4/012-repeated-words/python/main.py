import sys

from solution_only_the_words import only_words

def repeated_words(text_file):
    """Takes a text file, returns a string with lines where there are repeated words."""
    all_lines = []
    for line in text_file:
        all_lines.append(only_words(line))
    errors = ""
    line_index = 0
    for stored_line in all_lines:
        word_index = 0
        while word_index < len(stored_line):
            try:
                if stored_line[word_index] == stored_line[word_index+1]:
                    errors += "In line {} the word '{}' is repeated.\n".format(line_index + 1, stored_line[word_index])
            except IndexError:
                try:
                    if stored_line[word_index] == all_lines[line_index + 1][0]:
                        errors += "Between line {} and line {} the word '{}' is repeated.\n".format(line_index + 1, line_index + 2, stored_line[word_index])
                except IndexError:
                    pass
            word_index += 1
        line_index += 1
    return errors


if sys.argv[1:] == []:
    print("Missing argument! Enter the file name on the command line.")
else:
    try:
        with open(sys.argv[1]) as file:
            print("Errors found in file '{}':\n{}".format(sys.argv[1], repeated_words(file)))
    except FileNotFoundError:
        print("Error! File '{}' not found.".format(sys.argv[1]))
    except:
        print("Error! File '{}' could not be opened, make sure it is not a folder.".format(sys.argv[1]))