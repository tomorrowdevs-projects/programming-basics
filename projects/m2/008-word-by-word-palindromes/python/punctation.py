def remove_punctuation (string: str) -> list:
    '''
    return a list of the words in the string with the punctuation marks at the edges of the words removed.
    '''

    punctuation = ['.',',',':',';',"'",'!','?','-','_',' ','’',' ','"','”','“']
    
    words = string.split(" ")

    punctuation_free_words = []

    for string in words:
        if string[0] in punctuation:
            string = string[1:]
        if string[-1] in punctuation:
            string = string[:-1]
        punctuation_free_words.append(string)
        
    return punctuation_free_words
        
if __name__=="__main__":
    string = input("Insert a string. I'll show every word without punctation ")
    print(remove_punctuation(string))
