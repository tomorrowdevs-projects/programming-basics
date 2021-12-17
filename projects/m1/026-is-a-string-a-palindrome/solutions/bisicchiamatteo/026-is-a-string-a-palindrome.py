while True:
    
    input_word=input ("inserisci la parola oppure premi invio : ")
    if input_word=="":
        break
    inverted_input_word=input_word.lower[::-1]
    print (new_line)
    if (input_word ==inverted_input_word):
        print("la parola � palindroma")
    else:
        print("la parola non � palindroma")