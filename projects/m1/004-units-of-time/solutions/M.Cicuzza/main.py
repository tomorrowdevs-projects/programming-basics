giorni=int(input("Inserisci i giorni-> "))
ore=int(input("Inserisci le ore-> "))
minuti=int(input("Inserisci i minuti-> "))
secondi=int(input("Inserisci i secondi-> "))
seconditotali= giorni*86400+ore*3600+minuti*60+secondi
print(f"Il totale in secondi del tempo inserito è: {seconditotali}")