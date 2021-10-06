print ('inserisci un valore a caso di: ')
days=int(input('inserisci il valore dei giorni  '))
hours=int(input('inserisci il valore delle ore  '))
minutes=int(input('inserisci il valore dei minuti '))
seconds=int(input('inserisci il valore secondi  '))
totale= (days*86400)+(hours*3600)+(minutes*60) + seconds
print("il totale in secondi è: " + str(totale))

