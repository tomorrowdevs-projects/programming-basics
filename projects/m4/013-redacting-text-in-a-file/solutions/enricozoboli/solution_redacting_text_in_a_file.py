import sys

def flatten_list(l):
    """Take a list containing other lists ,if there are, and return a flatten list"""
    if not l:
        return l
    if type(l[0]) == list:
        return flatten_list(l[0]) + flatten_list(l[1:])
    else:
       return [l[0]] + flatten_list(l[1:])

def sensitive_list(sensitive_words_file):
    """"Take a file with listed sensitive words and return a list"""
    with open(sensitive_words_file) as f:
        lst = [line.split() for line in f]
        sensitive_words = flatten_list(lst)
    return  sensitive_words

try:
    sensitive_words_file = sys.argv[2]
    unredacted_document =sys.argv[1] 
except IndexError:
    print("Missing argument")
else:
    try:
        print("Enter the name of the readacted file or the absolute path.")
        redacted_document = input("(ex: /home/user/Desktop/output.txt): ") 
        with open(unredacted_document, 'r') as unredacted,\
            open(redacted_document, 'w') as redacted:
            sensitive_words = sensitive_list(sensitive_words_file)
            for line in unredacted:
                #convert a line of string in a list
                line_lst = line.split()
                for i in range(len(line_lst)):
                    #for each word in line list it loop through the
                    #word in sensitive words list
                    for word in sensitive_words:
                        #if the sensitive word is a substring(or equal) of the word in
                        #line list, replace it with asterisk
                        if word in line_lst[i].lower():
                            redacted_word = line_lst[i].lower().replace\
                                (word, '*' * len(word))
                            line_lst[i] = redacted_word
                redacted.write(" ".join(line_lst)+"\n")
    except PermissionError:
        print("Incorrect path")   