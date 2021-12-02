while True:
    
    line=input ("inserisci la parola oppure premi invio : ")
    if line=="":
        break
    new_line=line.lower[::-1]
    print (new_line)
    if (line ==new_line):
        print("la parola è palindroma")
    else:
        print("la parola non è palindroma")