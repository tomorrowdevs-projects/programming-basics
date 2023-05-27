parole_inserite = []
parola = input("Inserisci una parola: ")

while parola != "":
    if parola not in parole_inserite:
        parole_inserite.append(parola)
    parola = input("Inserisci una parola: ")

for parola in parole_inserite:
    print(parola)
