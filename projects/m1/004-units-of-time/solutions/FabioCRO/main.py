# acquisisce da input il numero di giorni, ore, minuti e secondi e restituisce la durata
# complessiva in secondi
ng=int(input("Inserisci il numero di giorni: "))
no=int(input("Inserisci il numero di ore: "))
nm=int(input("Inserisci il numero di minuti: "))
ns=int(input("Inserisci il numero di secondi: "))
tot_sec=ns+nm*60+no*3600+ng*24*3600
print("Il numero di secondi corrispondenti è:",tot_sec)