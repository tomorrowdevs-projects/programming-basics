text = input('Enter text: ')
text = text.lower()

consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j','k', 'l', 'm', 'n','p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
vowels = ['a', 'e', 'i', 'o', 'u']

words_list = text.split()
pig_words_list = []

for i in range(len(words_list)):

    if words_list[i][:1] in consonants:
        add = ''
        for letter in words_list[i]:
            if letter in consonants:
                add += letter
                words_list[i] = words_list[i][1:]
            elif letter in vowels:
                break
        pig_word = words_list[i] + add + 'ay'
        pig_words_list.append(pig_word)

    elif words_list[i][:1] in vowels:
        pig_word = words_list[i] + 'way'
        pig_words_list.append(pig_word)

pig_words = ' '.join(pig_words_list)

