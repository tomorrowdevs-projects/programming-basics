def formatta(sequenza):
    s = ""
    lista = sequenza.split(" ")
    if len(lista) == 0:
        return s
    if len(lista) == 1:
        s += lista[0].capitalize() + "."
        return s
    elif len(lista) == 2:
        s += lista[0].capitalize() + "," + lista[1]
        return s
    else:
        if "and" in lista:
            lista.remove("and")
            s += lista[0].capitalize()
            for l in lista[1:-1]:
                s += "," + l
            s += " and" + " " + lista[-1] + "."
    return s


if __name__ == '__main__':
    lista = []
    stringa = input("Inserisci una stringa ")
    while stringa != "":
        lista.append(stringa)
        stringa = input("Inserisci una stringa ")
    for l in lista:
        print(formatta(l))
