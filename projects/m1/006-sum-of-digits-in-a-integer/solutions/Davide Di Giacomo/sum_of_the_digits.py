import re

print ("Inserisci un numero intero di 4 cifre:")
numero = int(input())
if len(str(numero)) != 4:
    print ("Errore! Inserisci un numero intero di 4 cifre:")
    numero = int(input())
    
somma = sum(int(digit) for digit in str(numero))
    
print ("La somma data dai valori del tuo numero inserito è di:")
print (somma)
   