def formattin_a_list(words_list):
    if len(words_list) > 1:
        for element in range(len(words_list)):
            if element == len(words_list) - 1:                          
                words_list[element] = 'and ' + words_list[element]
            else:
                words_list[element] += ','
        return words_list
    else:
        return words_list


def main():
    words_list = []
    while True:
        word = str(input('Enter string: '))
        if word != '':
            words_list.append(word)
        else:
            break
    
    formattin_a_list(words_list)
    s = ' '
    result = s.join(words_list)

    return result
