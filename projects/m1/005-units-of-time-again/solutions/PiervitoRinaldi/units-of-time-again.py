# UNITS OF TIME (AGAIN)
# Trasforma la quantità di secondi inserita in giorni, ore, minuti e secondi,
# utilizzando il seguente formato: D:HH:MM:SS

input= int(input) # Inserisci il numero di secondi

giorni= input//86400
ore= (input%86400)//3600
minuti= ((input%86400)%3600)//60
secondi= ((input%86400)%3600)%60

print(giorni,': ',"%02i" %(ore),': ' "%02i"%(minuti),': ' "%02i"%(secondi))