def tokenize(s):
    operazioni = ["+", "-", "/", "*", "^", "(", ")"]
    cifre = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    lista = []
    r = ""
    i = 0
    while i < len(s):
        if s[i] in operazioni:
            r = ""
            lista.append(s[i])
            i += 1
        else:
            while i < len(s) and s[i] in cifre:
                r += s[i]
                i += 1
            lista.append(r)
    return lista


if __name__ == '__main__':
    s = input("Espressione numerica ")
    lista = tokenize(s)
    print(lista)
