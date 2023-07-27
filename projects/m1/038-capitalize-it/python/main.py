def capitalizeIt(s):

    words = s.split()
    index = 0

    while index < len(words):
        if index == 0:
            first_word = words[0].capitalize()
            new_string = []
            new_string.append(first_word)

        elif words[index] == 'i' or words[index][0] == 'i' and words[index][1] == '!' or words[index][0] == 'i' and words[index][1] == '?' or words[index][0] == 'i' and words[index][1] == "’":
            word_to_append = words[index].capitalize()
            new_string.append(word_to_append)

        elif words[index - 1][-1] == '.' or words[index - 1][-1] == '!' or words[index - 1][-1] == '?':
            word_to_append = words[index].capitalize()
            new_string.append(word_to_append)

        else:
            word_to_append = words[index]
            new_string.append(word_to_append)
        
        index = index + 1

    print(' '.join(new_string))
