list_of_words = []

word = input("Insert a word. Blank to stop ")
while word != "":
    list_of_words.append(word)
    word = input("Insert a word. Blank to stop ")

list_without_duplicates = []
for word in list_of_words:
    if word not in list_without_duplicates:
        list_without_duplicates.append(word)


for word in list_without_duplicates:
    print(word)