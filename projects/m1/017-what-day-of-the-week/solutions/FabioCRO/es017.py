def giorno_della_settimana(anno):

    giorni_settimana = ["domenica", "lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato"] #uso liste
    giorno_della_settimana= (anno + (anno - 1) // 4 - (anno - 1) // 100 + (anno - 1) // 400) % 7 #algoritmo suggerito
    return giorni_settimana[giorno_della_settimana] # indicizzo la lista


anno = int(input("inserisci un anno"))
giorno=giorno_della_settimana(anno)
print(f"Il primo gennaio dell'anno {anno} è {giorno}")