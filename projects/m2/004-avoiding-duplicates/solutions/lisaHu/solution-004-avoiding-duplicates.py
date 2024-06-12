def duplicates():
    #empty list to contain input
    words_list = []
    while True:
        word = input('Enter word (blank line to stop):\n')
        #break loop if input is blank
        if word == ' ':
            break
        #check if input word is already in list. if not, append
        if word not in words_list:
            words_list.append(word)
    return words_list

print(duplicates())