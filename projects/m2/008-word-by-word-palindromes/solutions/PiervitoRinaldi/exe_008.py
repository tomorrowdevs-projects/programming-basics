text = "Is it crazy how saying sentences backwards creates backwards sentences saying how crazy it is?"

def only_the_words(text):

    words_list = text.split()
    punctuation = [",", ".", "!", "?", ":", ";", "-"]
    
    
    for i in range(len(words_list)):        
        for letter in words_list[i]:        
            if letter in punctuation:
                words_list[i]= words_list[i][:-1]

    space = ''
    while space in words_list:
        words_list.remove(space)
    
    return words_list

def word_by_word(text):
    s_one = ' '
    words_list = only_the_words(text)
    first_text = (s_one.join(words_list)).lower()
    

    s_two = ' '
    words_list.reverse()
    second_text = (s_two.join(words_list)).lower()

    if first_text == second_text:
        print("Your string in a word by word a palindrome")
    else:
        print("This text isn't a palindrome")

word_by_word(text)


