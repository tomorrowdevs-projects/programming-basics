# MAKING CHANGE
# Calcola il resto dovuto, da una cassa automatica, con il minor numero di monete possibili.
# toonie= 2$ loonie= 1$ quarter= 25 cent dime= 10 cent nickel= 5 cent penny= 1 cent

cash= int(input)    # Inserisci in centesimi la quantità che stai versando
costo= int(input)   # Inserisci il costo della tua spesa
resto= int(cash-costo)

toonies= resto//200
loonies= (resto%200)//100
quarters= ((resto%200)%100)//25
dimes= (((resto%200)%100)%25)//10
nickels= ((((resto%200)%100)%25)%10)//5
pennies= ((((resto%200)%100)%25)%10)%5

print(toonies,'toonies \n', loonies,'loonies \n', quarters,'quarters \n', dimes,'dimes \n', nickels,'nickels \n', pennies,'pennies')