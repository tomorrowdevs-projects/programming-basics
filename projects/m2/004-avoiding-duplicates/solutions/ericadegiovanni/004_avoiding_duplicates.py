
# read words from the user until the user enters a blank line. 
words_arr = []
word_input = input('Enter a word (enter a blank line to quit): ')
while word_input != '':
    words_arr.append(word_input)
    word_input = input('Enter a word (enter a blank line to quit): ')

# display each word entered by the user exactly once and same order that they were first entered.  
no_duplicates = []
for i in words_arr:
    if i not in no_duplicates:
        no_duplicates.append(i)
        print(i)

    

