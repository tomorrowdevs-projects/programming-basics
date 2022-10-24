words_l = []
while True:
    word = input('Enter words: ')
    if word != '':
        words_l.append(word)
    else:
        break

new_words_l = []
for w in words_l:
    if w in new_words_l:
        continue
    else:
        new_words_l.append(w)

print(words_l)
print(new_words_l)
