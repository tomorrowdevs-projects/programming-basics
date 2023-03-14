giorni = int(input("Inserisci il numero di giorni: "))
ore = int(input("Inserisci il numero di ore: "))
minuti = int(input("Inserisci il numero di minuti: "))
secondi = int(input("Inserisci il numero di secondi: "))

totale_secondi = (giorni * 24 * 60 * 60) + (ore * 60 * 60) + (minuti * 60) + secondi

print("La durata inserita equivale a", totale_secondi, "secondi.")
