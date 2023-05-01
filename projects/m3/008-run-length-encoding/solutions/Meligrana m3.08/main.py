def codifica(elemento,ris):
    if len(elemento)==0:
        return ris
    i=0
    if elemento[i] not in ris:
        ris.append(elemento[i])
        ris.append(1)
    else:
        j=ris.index(elemento[i])
        ris[j+1] += 1
    return codifica(elemento[i+1:],ris)

if __name__ == '__main__':
    stringa=input("Stringa ")
    ris = []
    risultato=codifica(stringa.upper(),ris)
    print(stringa)
    print(risultato)