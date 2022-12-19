def only_the_words(input):
    punctuaction = ['.', ',', '?', '!', "'", ':', ';', '-']
    words_list = input.rsplit(' ')
    no_punct_list = []

    for word in words_list:
        left_edge = word[0]
        right_edge = word[-1]

        if (right_edge in punctuaction) and (left_edge in punctuaction):
            word = word[1:-1]
            no_punct_list.append(word)

        elif (right_edge in punctuaction):
            word = word[:-1]
            no_punct_list.append(word)

        elif (left_edge in punctuaction):
            word = word[1:]
            no_punct_list.append(word)

        else:
            no_punct_list.append(word)

    return no_punct_list

if __name__ == '__main__':
    print('This program will show all the words in your sentence without punctuaction')
    user_sentence = input('Enter your sentence: ')
    print(only_the_words(user_sentence))