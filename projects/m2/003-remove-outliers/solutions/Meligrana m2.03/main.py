def rimuoviestremi(lista):
    listaordinata=sorted(lista)
    return listaordinata[1:-1]
if __name__ == '__main__':
    lista = []
    elementi=0
    n = input("Inserisci un numero (invio per uscire): ")
    while n !="":
        lista.append(int(n))
        elementi+=1
        n = input("Inserisci un numero (invio per uscire): ")
    if len(lista)<4:
        print("Numero di elementi insufficiente")
    else:
        print(f"Lista con rimozioni: {rimuoviestremi(lista)}")
        print(f"Lista originaria: {lista}")