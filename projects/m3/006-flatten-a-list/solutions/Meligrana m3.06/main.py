def lista_piatta(lista):
    risultato=[]
    parte2=[]
    i = 0
    if lista==[]:
        return risultato
    if type(lista[i])==list:
        risultato+=lista_piatta(lista[i])
        parte2+=lista[i+1:]
        return risultato + lista_piatta(parte2)
    else:
        risultato.append(lista[i])
        parte2 += lista[i + 1:]
        return risultato + lista_piatta(parte2)
if __name__ == '__main__':
    data=[1,[2,3],[4,[5,[6,7]]],[[[8],9],[10]]]
    print(lista_piatta(data))