# Leggi il numero di secondi e lo converte in giorni, minuti e secondi

secondi = int(input("Inserisci il numero di secondi: "))

# Calcola il numero di giorni, or#e, minuti e secondi
giorni = secondi // (24 * 3600) 
secondi = secondi % (24 * 3600)
ore = secondi // 3600
secondi %= 3600
minuti = secondi // 60
secondi %= 60

#
#print(f"{giorni} giorni, {ore} ore, {minuti} minuti, {secondi} secondi") #stringhe formattate

# oppure
print(" giorni {:2d} ore {:2d} minuti {:2d} secondi {:4d}".format(giorni, ore, minuti, secondi))
