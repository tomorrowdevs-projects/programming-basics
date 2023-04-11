if __name__ == '__main__':
    lista=[]
    parola=input("Inserisci una parola ")
    lista.append(parola)
    while(parola!=""):
        parola = input("Inserisci una parola ")
        if parola not in lista:
            lista.append(parola)
    for p in lista:
        print(p)