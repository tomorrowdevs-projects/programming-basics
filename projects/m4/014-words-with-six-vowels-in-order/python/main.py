from onlywords import only_words

#name of the file provided by the user that will be searched
file_to_search = input("Enter the name of the file that you want to be searched: ")
#string containing six vowels once and in order
six_vowels = "aeiouy"
#list that will contain words with six vowels once and in order
six_vowels_words = []

try:
    with open(file_to_search, "r") as file:
        #string that will contain the vowels in the word
        vowels = ""
        all_words = only_words(file.read())
        for word in all_words:
            #every character in lower because must be case insensitive
            for char in word.lower():
                #checking all the vowels in the word
                if char in six_vowels:
                    vowels += char
            #if the word have all the vowels in order and once, it will be appended to the list
            if vowels == six_vowels:
                six_vowels_words.append(word.capitalize())
            #string with vowels becomes empty in order to check the vowels for the next word
            vowels = ""
    #displaying the words
    if six_vowels_words == []:
        print("There is no word that have all the vowels in order and only once.")
    else:
        print("The following word/words have the six vowels in order and once:")
        print(*six_vowels_words, sep = ", ")

except FileNotFoundError:
    print("File not found.")
except IndexError:
    print("Wrong number of command line arguments.")