def get_inputs(message):
    inputs = []
    while True:
        string = input(message)
        if string == "":
            break
        inputs.append(string)
    return inputs


def enumeration(lst):
    new_list = []
    for i in range(len(lst)-2):
        new_list.append(lst[i]+",")
    new_list.append(lst[-2] + " and " + lst[-1])
    return new_list


word_list = get_inputs("Enter a word of your list: ")
if len(word_list) == 1:
    print(word_list[0])
else:
    for word in enumeration(word_list):
        print(word, end=" ")



