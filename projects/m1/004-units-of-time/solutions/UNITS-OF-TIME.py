print("""\
Questo programma permette di calcolare 
data la durata dall'utente come numero di giorni, ore, minuti e secondi
la durata totale in secondi
""")
#INSERIMENTO DEI DATI RICHIESTI
day = int(input("Inserisci giorni:"))
ore = int(input("Inserisci ore:"))
minuti = int(input("Inserisci minuti:"))
second = int(input("Inserisci secondi:"))
#CALCOLO DEI SECONDI TOTALI
secondi = second + minuti * 60 + ore * 3600 + day * 86400
#STAMPA DEL RISULTATO OTTENUTO
print('{:12d}'.format(secondi))

