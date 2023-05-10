if __name__ == '__main__':
    n = int(input("Inserisci un numero intero: "))
    fattore = 2
    if (n <= 2):
        print("Errore")
    else:
        print(f"I fattori primi di {n} sono:")
        while fattore <= n:
            if (n % fattore == 0):
                print(f"{fattore}")
                n = n // fattore
            else:
                fattore += 1
