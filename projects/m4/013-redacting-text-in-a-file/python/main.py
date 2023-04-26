def replace_substring_with_asterisk(string: str,substring: str) -> str:
    '''
    Replace 'substring' in 'string' with asterisks, keeping uppercase and lowercase unchanged
    '''
    
    #'substring' is uppercase, I need to uppercase original string to find 
    # the first and last index of the substring into original string
    upper_string = string.upper()
    substring_first_index = upper_string.index(substring)
    substring_last_index = substring_first_index + len(substring) - 1

    #string will become a list of string's char
    string = list(string)
    
    #replace substring into string with *
    for i in range(substring_first_index,substring_last_index+1):
        string[i] = '*'

    #transform again the list into a string and return it
    return "".join(string)


import sys

text_file = open(sys.argv[1],'r')
sensitive_file = open(sys.argv[2],'r')
redacted_file = open(sys.argv[3],'w')

sensitive_words_list = sensitive_file.read().upper().split()
sensitive_file.close()

for line in text_file:
    #each line in text_file becomes a list of words
    line_words = line.split()

    for word_in_line in line_words:

        #To be case unsensitive I need an uppercase string to compare with sensitive worlds
        upper_word = word_in_line.upper()

        #if upper_word is in sensitive_word_list, split its chars into a list and replace with *
        if upper_word in sensitive_words_list:
            word_in_line = list(word_in_line)
            for index in range(0,len(word_in_line)):
                word_in_line[index] = '*'
            word_in_line = "".join(word_in_line)
        else:
            #if upper_word isn't in sensitive_word_list, probably a sensitive world could be into upper_word
            for sensitive_word in sensitive_words_list:
                if sensitive_word in upper_word:
                    word_in_line = replace_substring_with_asterisk(word_in_line,sensitive_word)

        #write the redacted word in file
        redacted_file.write(word_in_line+" ")

    redacted_file.write('\n')

text_file.close()
redacted_file.close()


                    

        