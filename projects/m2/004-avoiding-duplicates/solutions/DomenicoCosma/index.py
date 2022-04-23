
#function that removes the duplicates words in a list

def duplicates_words():
    words = []
    while True:
        request = input('Enter words one by one... (Enter blank line to quite)')
        if request == '':
            break
        else:
            words.append(request)
    words = list(dict.fromkeys(words))                             #Create a dictionary, using the List items as keys. This will automatically remove any duplicates because dictionaries cannot have duplicate keys.
    print(words)



duplicates_words()