print('Hello USER inserts your words ill display each word once')

def words_harvester():
    words_list = []
    user_words = ' '

    while user_words != '':
        user_words = input('Insert the word (blank line to stop input): ')
    
        if (user_words not in words_list) and (user_words != ''):
            words_list.append(user_words)

    return words_list

if __name__ == '__main__':
    print(words_harvester())