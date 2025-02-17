import punctation

def word_by_word_palindrome(words: list) -> bool:
    '''
    Return true if 'words' is palindrome examinating word by word
    '''
    is_palindrome = True
    index = 0

    while is_palindrome and index<(len(words)/2):
        if words[index].lower()!=words[-(index+1)].lower():
            is_palindrome = False
        index +=1

    return is_palindrome

string = input("Insert a string ")
words = punctation.remove_punctuation(string)

if word_by_word_palindrome(words):
    print("It's palindrome word by word")
else:
    print("It's not palindrome word by word")