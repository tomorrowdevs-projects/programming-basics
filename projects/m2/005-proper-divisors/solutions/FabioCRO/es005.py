def divisori_propri(numero):
    divisori = []
    for i in range(1, numero):
        if numero % i == 0:
            divisori.append(i)
    return divisori

# Programma principale
if __name__ == "__main__":
    numero = int(input("Inserisci un numero intero positivo: "))
    risultato = divisori_propri(numero)
    print("Divisori propri di", numero, ":", risultato)
