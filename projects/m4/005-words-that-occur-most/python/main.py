from sys import argv

#function that will create a list with the words in a string withtout punctuation marks.
def only_words(string):
    marks = [",",".","?","-","'","!",":",";"]
    string_list = string.split()
    new_string_list = []

    for index in string_list:
        if index[-1] in marks:
            index = index[0:-1]
        new_string_list.append(index)

    return(new_string_list)

words = []    #creating an empty list to put all the words in.

try:
    with open(argv[1], "r") as file:
        for line in file:    #processing every line in the file.
            line = line.lower()    #the program should ignore capitalization.
            line_list = only_words(line)
            for i in line_list:
                words.append(i)    #every single word of every line will be added in the list 'words'.
    
        words_frequencies = {}    #creating an empty dictionary to put the words frequencies in.
        for word in words:
            if word not in words_frequencies:
                words_frequencies[word] = 1
            else:
                words_frequencies[word] += 1

    #finding the most used word or words.
    max_value = max(words_frequencies.values())
    print(("Word or words that occur most frequently ({} times):") .format(max_value))
    for key, value in words_frequencies.items():
        if value == max_value:
            print(key)

except FileNotFoundError:
    print("File not found.")
except IndexError:
    print("Wrong number of command line arguments.")