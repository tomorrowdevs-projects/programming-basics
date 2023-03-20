numero=int(input("Inserisci un numero intero-> "))
somma=0
while numero>=1:
    cifra=numero%10
    #print("\n",cifra)
    somma=somma+cifra
    numero=(numero-cifra)/10
print("La somma delle cifre che compongono il numero inserito è: ",somma)