if __name__ == '__main__':
    punteggiatura=[",",".",";",":","?","!"]
    frase=input("scrivi una frase ")
    copia=""
    for c in frase:
        if c not in punteggiatura:
            copia+=c
        else:
            copia+=" "
    print(copia)
    lista=copia.split(" ")
    print(lista)
