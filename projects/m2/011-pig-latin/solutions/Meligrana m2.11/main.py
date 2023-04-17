def traduci(parola):
    vocali = {"a", "e", "i", "o", "u", }
    consonanti = {"b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "x", "w", "y", "z"}
    s=""
    risultato=""
    i=0
    if parola[i] in consonanti:
        s+=parola[i]
        i+=1
        while(parola[i] in consonanti):
            s += parola[i]
            i += 1
        risultato+=parola[i:]
        risultato+=s+"ay"
    else:
        risultato+=parola+"way"
    return risultato
if __name__ == '__main__':

    testo=input("Frase ")
    parole=testo.split(" ")
    traduzione=[]
    for p in parole:
        traduzione.append(traduci(p))
    risultato=" ".join(traduzione)
    print(risultato)



