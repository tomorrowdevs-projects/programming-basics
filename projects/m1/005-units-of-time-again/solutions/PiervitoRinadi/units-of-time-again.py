# UNITS OF TIME (AGAIN)
# Trasforma un numero qualsiasi di secondi in formato D:HH:MM:SS (giorni, ore, minuti, secondi)

secondiDaTrasformare= int(input)    #Inserisci il numero di secondi 

giorni= secondiDaTrasformare//86400
ore= (secondiDaTrasformare%86400)//3600
minuti= ((secondiDaTrasformare%86400)%3600)//60
secondi= ((secondiDaTrasformare%86400)%3600)%60

print(giorni,':', '%02i' %(ore),':', '%02i' %(minuti),':', '%02i' %secondi)