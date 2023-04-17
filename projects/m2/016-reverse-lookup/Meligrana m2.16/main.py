def reverseLookup(d,val):
    lista=[]
    for k,v in d.items():
        if val==v:
            lista.append(k)
    return lista


if __name__ == '__main__':
    d={}
    chiavi=[]
    lista2=[]
    print("Crea un dizionario")
    chiave=input("Inserisci una chiave (invio se vuoi uscire) ")
    chiavi.append(chiave)
    while chiave!="":
        valore = input("Inserisci il relativo valore ")
        d[chiave] = valore
        chiave = input("Inserisci una chiave (invio se vuoi uscire) ")
        if chiave in chiavi:
            print("hai già inserito questa chiave")
            chiave = input("Inserisci una chiave (invio se vuoi uscire) ")
        chiavi.append(chiave)
    print(d)
    for v in d.values():
        lista=reverseLookup(d,v)
        if v not in lista2:
            lista2.append(v)
            print(f"Chiavi associate al valore {v}:\t{lista}")
    for i in range(0,11):
        lista = reverseLookup(d, i)
        print(f"Chiavi associate al valore {i}:\t{lista}")