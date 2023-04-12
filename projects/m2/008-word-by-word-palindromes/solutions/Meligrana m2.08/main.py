def toglie_punteggiatura(frase):
    punteggiatura=[",",".",";",":","?","!"]
    copia=""
    for c in frase:
        if c not in punteggiatura:
            copia+=c.lower()
        else:
            copia+=" "
    lista=copia.split(" ")
    return lista

if __name__ == '__main__':
    frase=input("Inserisci una frase ")
    x=True
    lista=toglie_punteggiatura(frase)
    meta=len(lista)//2
    for i in range(0,meta):
        if lista[i]!=lista[len(lista)-1-i]:
            x=False
            break
    if x==True:
        print("Frase palindroma")
    else:
        print("Frase non palindroma")

