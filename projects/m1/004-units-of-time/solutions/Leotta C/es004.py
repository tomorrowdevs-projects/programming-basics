d=int(input("inserisci il n. di giorni: "))
h=int(input("inserisci il n. di ore: "))
m=int(input("inserisci il n. di minuti: "))
s=int(input("inserisci il n. di secondi: "))

print(f"il numero totale di secondi è {s+ m*60 + h*3600 + d*24*3600}")
