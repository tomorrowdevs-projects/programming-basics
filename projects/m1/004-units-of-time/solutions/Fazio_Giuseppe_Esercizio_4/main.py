# calcolo secondi
giorni = int(input ("inserisci il numero dei giorni: "))
ore = int(input ("inserisci il  numero delle ore : "))
minuti = int(input ("inserisce il numero dei minuti: "))
secondi = int(input ("inserisci il  valore dei secondi: "))

totale = giorni*86400 + ore * 3600  + minuti * 60 + secondi
print ("totale in secondi = ", totale)
