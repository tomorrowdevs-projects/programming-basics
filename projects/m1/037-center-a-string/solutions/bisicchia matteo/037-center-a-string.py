def center_line():
        if (int(len(sentence))>int (window_lenght)):
            print (sentence)
    
        else :
            space =abs(((int(len(sentence)) - int(window_lenght)) // 2))
            new_sentence=(" "*space)+sentence
            print (new_sentence)
         
while True:
    sentence=input ("insert the sentence : ")
    window_lenght=input("insert the width of the window in characters :")
    if (sentence==""):
        break
    center_line()