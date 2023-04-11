if __name__ == '__main__':
    lista = []
    n = int(input("Elemento (0 per uscire): "))
    while (n != 0):
        lista.append(n)
        n = int(input("Elemento (0 per uscire): "))
    print("Lista ")
    for i in range(len(lista)-1,-1,-1):
       print(f"{lista[i]}")
