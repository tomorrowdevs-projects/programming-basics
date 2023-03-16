def capitalize_string(stringa):

    for i in range(len(stringa)):
        if stringa[i] == "!":
            indice = i
            stringa = stringa[:indice+2] + stringa[indice+2:].capitalize()

        if stringa[i] == "?":
            indice = i
            stringa = stringa[:indice+2] + stringa[indice+2:].capitalize()

        if stringa[i] == ".":
            indice = i
            stringa = stringa[:indice+2] + stringa[indice+2:].capitalize()   

        if stringa[i] == "," and stringa[i+2] == "i":
            indice = i
            stringa = stringa[:indice+2] + stringa[indice+2:].capitalize()

        if stringa[i] == "'" and stringa[i+1] == "i":
            indice = i
            stringa = stringa[:indice+1] + stringa[indice+1:].capitalize()

        if stringa[0].islower():
            stringa = stringa.capitalize()

    return stringa


def main():
    stringa = input("Inserisci una stringa: ")
    stringa_capitalizzata = capitalize_string(stringa)
    print(stringa_capitalizzata)

if __name__ == '__main__':
    main()