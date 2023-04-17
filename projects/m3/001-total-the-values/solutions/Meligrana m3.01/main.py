def somma_valori():
    a=input("Inserisci un numero ")
    if a=="":
        return 0.0
    return int(a)+somma_valori()

if __name__ == '__main__':
    print(somma_valori())


