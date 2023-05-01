def senza_sort():
    lista = []
    inserito=False
    n = int(input("Elemento (0 per uscire): "))
    while (n != 0):
        i=0
        while(i<len(lista)):
            if n<lista[i]:
                lista.insert(i, n)
                inserito=True
                break
            else:
                i+=1
        if not inserito:
            lista.append(n)
        n = int(input("Elemento (0 per uscire): "))
        print(lista)
    return lista


def con_funzione():
    lista = []
    n = int(input("Elemento (0 per uscire): "))
    while (n != 0):
        lista.append(n)
        n = int(input("Elemento (0 per uscire): "))
    lista.sort()
    return lista


if __name__ == '__main__':
    print("Prima lista")
    lista1=senza_sort()
    for i in range(len(lista1)):
       print(f"{lista1[i]}")
    print("Seconda lista")
    lista = con_funzione()
    for i in range(len(lista)):
        print(f"{lista[i]}")
