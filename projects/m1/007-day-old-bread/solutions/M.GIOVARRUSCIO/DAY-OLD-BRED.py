print("""\
Un panificio vende pagnotte a 3,49 euro l'una.
Il pane raffermo è scontato del 60%.
Scrivere un programma che inizi leggendo il numero di pagnotte di pane raffermo 
acquistate dall'utente.
Quindi il tuo programma dovrebbe visualizzare il prezzo normale per il pane, 
lo sconto perché è vecchio di un giorno e il prezzo totale.
Ciascuno di questi importi deve essere visualizzato su una propria riga con 
un'etichetta appropriata.
Tutti i valori devono essere visualizzati utilizzando due cifre decimali e i 
punti decimali in tutti i numeri devono essere allineati 
quando l'utente inserisce valori ragionevoli.
""")
prezzopane =3.49
sconto=0.60
numero =int(input("Inserisci il numero di pagnotte di pane raffermo acquistate:"))
totalenormale = prezzopane * prezzopane
totalesconto = prezzopane * sconto * numero
totale = prezzopane * numero - totalesconto
t="Il prezzo totale normale del pane è:"
s="Lo sconto totale è:"
z="Prezzo totale è:"
print('{0:40}{1:10.2f} euro'.format(t,totalenormale))
print('\n{0:40}{1:10.2f} euro'.format(s,totalesconto))
print('\n{0:40}{1:10.2f} euro'.format(z,totale))