def decodifica(lista):
    ris=[]
    if lista==[]:
        return ris
    j=0
    k=lista[j+1]
    for i in range(0,k):
        ris.append(lista[j])
    return ris+decodifica(lista[j+2:])
    
if __name__ == '__main__':
    lista = ['p', 2, 'r', 1, 'e', 5, 'c', 1, 'i', 4, 't', 2, 'v', 2, 'o', 2, 'l', 2, 's', 2, 'm', 2, 'n', 1]
    risultato=decodifica(lista)
    print(risultato)