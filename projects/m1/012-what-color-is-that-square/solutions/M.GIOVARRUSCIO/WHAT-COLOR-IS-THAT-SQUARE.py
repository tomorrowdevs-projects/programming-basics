print("""\
Scrivete un programma che legga una posizione dall'utente.
Utilizzare un'istruzione if per determinare se la colonna inizia con un quadrato nero o bianco.
Quindi usa l'aritmetica modulare per riportare il colore del quadrato in quella riga.
Ad esempio, se l'utente inserisce a1, il programma dovrebbe segnalare che il quadrato è nero.
Se l'utente inserisce d5, il tuo programma dovrebbe segnalare che il quadrato è bianco.
Il programma può presumere che verrà sempre inserita una posizione valida.
Non è necessario eseguire alcun controllo degli errori.
""")
posizione = input("Prego inserire una posizione:")
if posizione[0]=='A' or posizione[0]=='C' or posizione[0]=='E' or posizione[0]=='G':
    if posizione[1]=='1' or posizione[1]=='3' or posizione[1]=='5' or posizione[1]=='7':
        print("la casella è di colore NERO")
    else:
        print("la casella è di colore BIANCO")
else:
    if posizione[1]=='1' or posizione[1]=='3' or posizione[1]=='5' or posizione[1]=='7':
        print("la casella è di colore BIANCO")
    else:
        print("la casella è di colore NERO")
