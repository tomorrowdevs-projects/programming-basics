def remove_punctuation (string: str) -> list:
    '''
    return a list of the words in the string with the punctuation marks at the edges of the words removed.
    '''

    punctuation = ['.',',',':',';',"'",'!','?','-','_',' ','’',' ','"','”','“']
    
    #first_index is the index of the first character of the word will be extrapolated from 'string'
    first_index=0

    #last_index is the index of the last char of the word will be extrapolated from 'string
    last_index=0

    
    words = []
    
    for i in range(len(string)):
        # If the string[i] isn't a punctuation or it's an apostrophe but was preceded by a char != punctation 
        # then last_index will increment by 1
        if string[i] not in punctuation or ((string[i]=="'" or string[i] == "’")and not was_punctation):
            was_punctation = False
            last_index += 1
        else:
            if was_punctation:
                #if string[i] is a punctation and it was preceded by a punctation, skip it incremented first_index and last_index
                first_index = i + 1
                last_index = first_index
            else:
                words.append(string[first_index:last_index])
                first_index = i + 1
                last_index = first_index
                was_punctation = True
    return words

string = input("Insert a string. I'll show every word without punctation ")
print(remove_punctuation(string))

