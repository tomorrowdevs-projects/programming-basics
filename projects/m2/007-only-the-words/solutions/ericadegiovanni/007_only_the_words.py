
def only_words(str):

    # take a string as only parameter
    # return a list of the words in the string without the punctuation marks
    # remove the punctuation marks only at the edge of each word

    splitted_str = str.split()
    return [word.strip("\"'!?,:.;-") for word in splitted_str]


def main():

    #identifies all of the words in a string entered by the user.
    entred_string = input('Enter a string: ')
    print(only_words(entred_string))


if __name__ == '__main__':
    main()