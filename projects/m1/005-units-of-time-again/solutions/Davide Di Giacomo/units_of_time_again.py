#variabili
giorno = 24
ora = 60 
minuto = 60
secondo = 60

print ("Inserisci un numero di secondi a tua scelta:")
secondi = int(input())
print ("Hai inserito " + str(secondi))
print ("Ora ti indicherò a quanti giorni, ore e minuti corrispondono i tuoi secondi:")
giorni = secondi // minuto // ora // giorno
ore = secondi // minuto // ora
minuti = secondi // minuto

#sottraggo ai valori ottenuti l'unità di tempo precedente per ottenere un valore dell'unità di tmepo di riferimento

ora_esatta =  ore - (giorni * giorno)
minuto_esatto = minuti - (ore * ora) 
secondo_esatto = secondi - (minuti * minuto)

print (str(giorni).zfill(2) + ":" + str(ora_esatta).zfill(2) + ":" + str(minuto_esatto).zfill(2) + ":" + str(secondo_esatto).zfill(2))
    