import sys

try:
    file = open(sys.argv[1],'r')

    words_list = file.read().split()
    vowels = "aeiouyAEIOUY"

    for word in words_list:
        word_vowels = []
        for char in word:
            if char in vowels:
                word_vowels.append(char.capitalize())

        if word_vowels == list("AEIOUY"):
            print(word)

    file.close()

except FileNotFoundError:
    print("File not founded")
except IndexError:
    print("Command line argument (file name) is omitted")
   



