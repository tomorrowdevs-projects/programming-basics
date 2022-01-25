#variabili
giorno = 24
ora = 60
minuto = 60

print ("Ciao! sono il countdown ufficiale per il 2023!")
print ("Vuoi sapere quanti secondi mancano alla fine dell'anno?")
print ("Inserisci il numero di giorni rimanenti per la fine dell'anno:")
giorni = int(input())
print ("hai inserito " + str(giorni) + " giorni")
print ("ora inserisci il numero di ore che mancano alla fine di questo giorno:")
ore = int(input())
print ("hai inserito " + str(ore) + " ore")
print ("ora inserisci il numero di minuti che mancano allla fine di quest'ora:")
minuti = int(input())
print ("hai inserito " + str(minuti) + " minuti")
print ("ora inserisci il numero di secondi che mancano alla fine di questo minuto:")
secondi = int(input())
print ("hai inserito " + str(secondi) + " secondi")

#calcolo secondi totali
secondi = (giorni*giorno*ora*minuto) + (ore*ora*minuto) + (minuti*minuto)
print ("Mancano " + str(secondi) + " secondi alla fine dell'anno!!")