
def remove_punctuation(string):
    new = string.split(" ")
    stringa = []
    for word in new:
        if word[-1].isalpha() == False:
            word = word.replace(word[-1], "")
            stringa.append(word)
        else:
            stringa.append(word)
    return stringa

def main():
    string = input("Insert here a phrase and we will return you a list of all the words without the punctuation mark! Don't believe me? Try yourself!\n")
    print(f"This is your list: {remove_punctuation(string)}\nMagic? Almost...")

if __name__ == "__main__":
    main()
