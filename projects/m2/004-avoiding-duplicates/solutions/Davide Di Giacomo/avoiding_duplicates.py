def main():
    word=str(input("Insert a word:"))
    words=[]
    while word!="":
        if word in words:
            word=str(input("Insert a word:"))
        else:
            words.append(word)
            word=str(input("Insert a word:"))
    else:
        return words
        
print(main())
