# calcola gli anni canini corrispondenti agli anni umani acquisiti da input
anni_umani = int(input("Inserisci il numero di anni umani: "))

if anni_umani <= 2:
    anni_canini = anni_umani * 10.5
else:
    anni_canini = 21 + (anni_umani - 2) * 4

    print("Gli anni canini corrispondenti sono:", anni_canini)
