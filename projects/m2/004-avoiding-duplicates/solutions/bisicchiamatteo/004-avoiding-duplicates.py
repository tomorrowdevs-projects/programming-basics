
def main():
    global list_word
    list_word=[]
    
    while True:
         word=input("insert the word : ")
         if word =="":
             break
         list_word.append(word)
   
    list_word=list(dict.fromkeys(list_word))
    print (list_word)
   

if __name__ == "__main__":
    main()
