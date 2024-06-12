# BOTTLE DEPOSITS
# Calcola l'importo dovuto per ogni bottiglia restituita con capienza da 0.10 litri e 0.25 litri.

numberLittleBottles= int(input) # Inserisci numero bottiglie da 0.10 litri
numberBigBottles= int(input) # Inserisci numero bottiglie da 0.25 litri

importoDovuto= 0.10*numberLittleBottles+0.25*numberBigBottles

print('Importo dovuto: $ %.2f' %(importoDovuto))