def lista_caratteri(s):
    lista=[]
    for c in s:
        lista.append(c)
    return lista


if __name__ == '__main__':
    stringa1=input("Prima stringa ")
    stringa2 = input("Seconda stringa ")
    caratteri1=sorted(lista_caratteri(stringa1))
    caratteri2 = sorted(lista_caratteri(stringa2))
    if caratteri1==caratteri2:
        print(f"{stringa1} è un anagramma di {stringa2}")
    else:
        print(f"{stringa1} non è un anagramma di {stringa2}")