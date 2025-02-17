word_list = []
word = input("Enter a word (blank to finish): ")

while word != "":
    if word in word_list:
        word_list = word_list
    else:
        word_list.append(word)
    word = input("Enter a word (blank to finish): ")

print(*word_list)

 
    


    

    