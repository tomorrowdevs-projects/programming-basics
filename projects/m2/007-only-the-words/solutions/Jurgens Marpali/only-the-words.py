def only_words(str):

    splitted = str.split()
    return [words.strip("?!.,':-"";/") for words in splitted]


def main():
    user = input("Enter a word, press enter to exit : ")
    if user != '':          
        print(only_words(user))
    

if __name__ in "__main__":
    main()

