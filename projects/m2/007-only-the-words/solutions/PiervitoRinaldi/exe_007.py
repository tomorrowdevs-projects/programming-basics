def only_the_words(text):

    words_list = text.split()
    punctuation = [",", ".", "!", "?", ":", ";", "-"]
    print(words_list)
    
    for i in range(len(words_list)):        # Restituisce l'indice di ogni elemento!
        for letter in words_list[i]:        
            if letter in punctuation:
                words_list[i]= words_list[i][:-1]

    space = ''
    while space in words_list:
        words_list.remove(space)
    
    return words_list


def main():
    text = input('Enter text: ')
    print(only_the_words(text))

main()