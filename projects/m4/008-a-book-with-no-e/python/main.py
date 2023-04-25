import sys

try:
    f = open(sys.argv[1])

    alphabet = "ABCDEFGHJKILMNOPQRSTUVWXYZ"
        
    letter_dict = {}
    for letter in alphabet:
        letter_dict[letter] = 0

    for line in f:
        #words is a list of word contained in each line of file
        words = line.split()

        for word in words:
            word = word.upper()

            # for each word in words list initalite a set with letters contained in word without duplicate
            letter_in_word = set()

            for char in word:            
                if char in alphabet:
                    letter_in_word.add(char)

            #for each letter added in letter set count it in the dictionary        
            for letter in letter_in_word:
                letter_dict[letter] += 1

    for key in letter_dict:
        print(f"{key} in {letter_dict[key]} words")            

    sorted_letter_dict_by_item = sorted(letter_dict.items(), key=lambda x:x[1])
    min_proportion = sorted_letter_dict_by_item[0][1]
    print( f"Letters that are used in the smallest proportion of the words ({min_proportion} words) are: ")

    index = 0
    while sorted_letter_dict_by_item[index][1] == min_proportion:
        print(sorted_letter_dict_by_item[index][0])
        index += 1

    f.close()    

except FileNotFoundError: 
    print("File not founded")
except IndexError:
    print("File name arg omitted")
    