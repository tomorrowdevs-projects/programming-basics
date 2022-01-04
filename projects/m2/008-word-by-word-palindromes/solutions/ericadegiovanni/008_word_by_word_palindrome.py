def only_words(str):
    
    #return a list with the words of the given string

    splitted_str = str.split()
    return [word.strip("\"'!?,:.;-").lower() for word in splitted_str]


def is_palindrome(sentence):

    # recieve a sentence
    # return if it is palindrome word by word
    
    #Ignore spacing punctuation and capitalization
    words_splitted = only_words(sentence)

    # create a list with the sentence reversed items
    words_reversed = words_splitted[::-1]
    
    #compare the lists
    if words_splitted == words_reversed:
        print('It is palindrome.')
    else:
        print('It is not palindrome.')

# Create a program that reads a string from the user. 
# report whether or not the entered string is a word by word palindrome. 
sentence = input('Enter a string to know if it is word by word palindrome: ')
is_palindrome(sentence)
