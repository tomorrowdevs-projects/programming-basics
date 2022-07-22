# MAKING CHANGE
# Software per il calcolo di resto dovuto da una cassa automatica

# Monete disponibili:
# toonies= 2 $
# loonies= 1 $
# quarter= 25 centesimi
# dimes= 10 centesimi
# nickels= 5 centesimi
# pennies= 1 centesimo

soldiVersati = 89755    # Inserisci in centesimi i soldi versati
spesa = 7860   # Inserisci in centesimi a quanto ammonta la spesa

resto = int(soldiVersati-spesa)

toonies=resto//200
loonies=(resto%200)//100
quarter=((resto%200)%100)//25
dimes=(((resto%200)%100)%25)//10
nickels=((((resto%200)%100)%25)%10)//5
pennies=(((((resto%200)%100)%25)%10)%5)//1

print(toonies,'toonies')
print(loonies,'loonies')
print(quarter,'quarter')
print(dimes,'dimes')
print(nickels,'nickels')
print(pennies,'pennies')