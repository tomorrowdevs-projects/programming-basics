print("""\
La durata di un mese varia da 28 a 31 giorni.
In questo esercizio creerete un programma che legge il nome di un mese dall'utente come una stringa.
Quindi il tuo programma dovrebbe visualizzare il numero di giorni in quel mese. Visualizza "28 o 29 
giorni" per febbraio 
in modo che gli anni bisestili vengano affrontati.
""")
anno = int(input("Digita l'anno da testare: "))
mese =input("Inserire mese a lettere:")
if (mese == 'gennaio') or (mese == 'marzo') or (mese == 'maggio') or (mese == 'luglio') or (mese == 'agosto') or (mese == 'ottobre') or (mese == 'dicembre'):
    print("Ha 31 giorni")
elif (mese == 'febbraio'):
    if (anno % 400 == 0) or ((anno % 4 == 0) and (anno % 100 != 0)):
        # si tratta di un secolo ogni 400 anni
        print("L'anno ", anno, "è bisestile!")
        print("Ha 29 giorni")
    else:
        print("Ha 28 giorni")
else:
    print("Ha 30 giorni")