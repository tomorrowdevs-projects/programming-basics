def get_inputs(message):
    inputs = []
    while True:
        string = input(message)
        if string == "":
            break
        inputs.append(string)
    return inputs


words = get_inputs("Enter a word: ")
list_of_words = []
for word in words:
    if word not in list_of_words:
        list_of_words.append(word)

print("\n".join(list_of_words))