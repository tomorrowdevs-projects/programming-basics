def palindrome(s):
    #create a list of words in string using blank spaces to determine start and end of element
    original_list = (s.lower()).split(' ')
    new_list = []
    punctuation_marks = ['!','?','.',',',':',';','-',"'"]

    #for each word in list, check if first and last character are in the list of puntaction marks list
    for word in original_list:
        #if they are, replace them with blank (nothing) and append the new word in new list
        #if they aren't append the word in new list as there is nothing to chnge
        if word[-1] in punctuation_marks or word[0] in punctuation_marks:
            if word[-1] in punctuation_marks:
                word = word.replace(word[-1], '')
            if word[0] in punctuation_marks:
                word = word.replace(word[0], '')
            new_list.append(word)
        else:
            new_list.append(word)

    #check if reversed list is identical
    if new_list[::-1] == new_list:
        return True
    else:
        return False

#get string from user and print statement whether return of function is true
string = input('Enter a string: ')
if palindrome(string) == True:
    print('Your string is a palindrome word by word')
else:
    print('Your string is not a palindrome word by word')