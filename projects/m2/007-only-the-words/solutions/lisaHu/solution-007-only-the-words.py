def only_the_words(s):
    #create a list of words in string using blank spaces to determine start and end of element
    word_list = s.split(' ')
    new_word_list = []
    punctuation_marks = ['!','?','.',',',':',';','-',"'"]

    #for each word in list, check if first and last character are in the list of puntaction marks list
    for word in word_list:

        #if they are, replace them with blank (nothing) and append the new word in new list
        #if they aren't append the word in new list as there is nothing to chnge
        if word[-1] in punctuation_marks or word[0] in punctuation_marks:
            if word[-1] in punctuation_marks:
                word = word.replace(word[-1], '')
            if word[0] in punctuation_marks:
                word = word.replace(word[0], '')
            new_word_list.append(word)
        else:
            new_word_list.append(word)
    return new_word_list

#get string from user and print return of function
string = input('Enter a string: ')
print(*only_the_words(string), sep = ' ')