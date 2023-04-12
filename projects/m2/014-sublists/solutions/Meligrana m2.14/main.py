def sottolista(lista):
    l=[[]]
    for i in range(0,len(lista)):
        for j in range(i,len (lista)):
            if lista[i:j+1] not in l:
                l.append(lista[i:j+1])
    return l
def is_sottolista(lista,sottol):
    l=sottolista(lista)
    if sottol in l:
        return True
    return False

if __name__ == '__main__':
    lista=[1,2,3,4]
    lista1=[2,3]
    lista2=[2,4]
    print(f"{lista1} è una sottolista di {lista}?  {is_sottolista(lista,lista1)}")
    print(f"{lista2} è una sottolista di {lista}?  {is_sottolista(lista, lista2)}")