coded_word=[]
index=0
index2=0
strr=""

alphabet="abcdefghijklmnopqrstuvwxyz"
word=str(input("Enter word to coding: "))

for index in range (len(word)):
    while index2<=25:
        if word[index]==alphabet[index2]:
           if index2>=23:
               index2=index2-23
               coded_word.append(alphabet[index2])
           else:
                coded_word.append(alphabet[index2+3])
           break
        index2+=1
    index2=0

newword=strr.join(coded_word)
print(f"Coded Word is: {newword}")      