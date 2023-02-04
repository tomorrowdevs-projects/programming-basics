def only_words(string):
    marks = [",",".","?","-","'","!",":",";","(",")"]
    string_list = string.split()
    new_string_list = []

    for index in string_list:
        if index[-1] in marks:
            index = index[0:-1]
        new_string_list.append(index)

    return(new_string_list)