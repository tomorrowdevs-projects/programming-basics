#Calcola  il rimborso per la restituzione di bottiglie inferiori e superiori ad 1 litro.

bigBottles = 4 # Inserisci il numero di bottiglie con capacità superiore ad un litro. 
littleBottles = 0 # Inserisci il numero di bottiglie con capacità pari o inferiore ad un litro.

# 0.10$ = rimborso per una bottiglia pari o inferiore ad un litro.
# 0.25$ = rimborso per una bottiglia superiore ad un litro.

deposit = 0.10*littleBottles+0.25*bigBottles
print ( "%.2f" %(deposit),'$')