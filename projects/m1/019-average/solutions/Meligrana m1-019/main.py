if __name__ == '__main__':
    fine=True
    lista=[]
    somma=0
    x=int(input("Inserisci un valore "))
    if x==0:
        print("Errore")
        fine=False
    else:
        lista.append(x)
    while(fine):
        x = int(input("Inserisci un valore "))
        if(x==0):
            break
        else:
            lista.append(x)
    if len(lista)!=0:
        for i in range(0,len(lista)):
            somma+=lista[i]
        media=somma/len(lista)
        print(f"media={media}")
