
#function that reads a string from the user and report whether or not the entered string is a word by word palindrome

def palindrome():
    text = input('Enter a sentence to discover if it\'s a palindrome sentence \n')
    text = text.lower()
    punc = ',.%/()[]{}-_:?!'
    for ele in text:
        if ele in punc:
            text = text.replace(ele, '')
    text_list = text.split()
    reverse_text = reversed(text_list)                                  #reversed function sets the list from the end to the start but we need to make a new list (reverse_text_list)
    reverse_text_list = list(reverse_text)
    if text_list == reverse_text_list:
        print('Is a palindrome sentence')
    else:
        print('It\'s not a palindrome sentence')

palindrome()