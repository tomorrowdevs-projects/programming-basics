print("""\
Si dice comunemente che un anno umano equivale a 7 anni canini.
Tuttavia questa semplice conversione non riesce a riconoscere che i 
cani raggiungono l'età adulta in circa due anni.
Di conseguenza, alcune persone credono che sia meglio contare ciascuno 
dei primi due anni umani come 10,5 anni canini, 
e poi contare ogni anno umano aggiuntivo come 4 anni canini.
Scrivete un programma che implementi la conversione da anni umani ad 
anni canini descritta nel paragrafo precedente.
Assicurati che il tuo programma funzioni correttamente per conversioni 
inferiori a due anni umani e per conversioni di due o più anni umani.
Il programma dovrebbe visualizzare un messaggio di errore appropriato se 
l'utente immette un numero negativo.
""")
etau=int(input("Inserire eta umana"))
if etau < 0:
    print("impossibile eseguire conversione visto che è stato inserito un numero negativo")
else:
    if etau >= 2:
        etac = 2 * 10.5
    if etau > 2:
        etac = etac + (etau - 2) * 4
    print(etac)




