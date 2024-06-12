words = []
word_user = input("Enter words, type enter to exit: ")

while word_user != '':
    words.append(word_user)
    word_user = input("Enter words, press enter to exit:")

duplicate = []

for i in words:
    if i not in duplicate:
        duplicate.append(i)
        print(i)