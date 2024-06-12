coded_word=""

alphabet="abcdefghijklmnopqrstuvwxyz"
word=input("Enter word to coding: ")

for index in range (len(word)):
    for index2 in range (len(alphabet)):
        if word[index]==alphabet[index2]:
           if index2>=23:
               index2=index2-23
               coded_word+=alphabet[index2]
           else:
                coded_word+=alphabet[index2+3]
print(f"Coded Word is: {coded_word}")     