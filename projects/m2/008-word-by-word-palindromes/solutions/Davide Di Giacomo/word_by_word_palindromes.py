#check if it is a string is a word by word palindrome.
#split the string to find the single word
#input words to a list
#check if the opposite position in the list are the same

#function to create a list of words without puctuation
def split_string(string):
    punctuation = [",", ".", "!", "?", ":", ";", "-"]
    words=[]
    #split the input string
    word = string.split(' ')
    #if punctuation is in the end remove them
    for x in range(0, len(word)):
        check = list(word[x])
        for i in range (0, len(check)):
            if check[i] in punctuation:
                check.pop(i)
                check= "".join(check)
        if check != check:
            words.append(check)
        #if is not in punctuation append in words
        else:
            if check not in punctuation:
                check= "".join(check)
                words.append(check)
    return words

#function to reverse list
def reverse_list(list1):
    reverse_list=[]
    i = len(list1) - 1
    while(i >= 0):
        reverse_list.append((str(list1[i])))
        i = i - 1
    return reverse_list

def word_by_word(string):
    check_1=[]
    check_2=[]
    #use this function to create a list of words without puctuation
    words = split_string(string)
    #create 2 opposite list. 1 form the beginning to middle. 2 from the end to the middle
    for x in range (0, (len(words)//2)):
        check_1.append(words[x])
    for x in range (-(len(words)//2), 0):
        check_2.append(words[x])
    #reverse the second list to become the same to the other
    reverse = reverse_list(check_2)
    if check_1==reverse: return True 
    else: False  
        
def print_result():
    if word_by_word(string) is True:
        print("Your string is a word by word palindromes.")
    else: print("Your string isn't a word by word palindromes.")
    
string=input("Enter a string to check if it is a word by word palindromes. ")
print_result()