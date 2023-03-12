print("""\
Questo programma permette di calcolare 
data la durata totale fornita dall'utente in secondi 
converte in  numero di giorni, ore, minuti e secondi
la durata totale stessa
nella forma D:HH:MM:SS
""")
#INSERIMENTO DURATA IN SECONDI
secondi = int(input("Inserisci durata totale in secondi:"))
#STEP 1: CONVERSIONE IN GIORNI
day = secondi // 86400
secondi = secondi % 86400
#STEP 2: CONVERSIONE DEL RESIDUO IN ORE
ore = secondi // 3600
secondi = secondi % 3600
#STEP 3: CONVERSIONE DEL RESIDUO IN MINUTI
minuti = secondi // 60
#STEP 4: RESIDUO IN SECONDI
secondi = secondi % 60
#STAMPA DEL RISULTATO NEL FORMATO RICHIESTO
print('{0:2d}:{1:2d}:{2:2d}:{3:2d}'.format(day, ore, minuti , secondi))
