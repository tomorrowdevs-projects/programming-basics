import os
import math
# Programma M019
os.system("cls")
#
somma =float(0) 
print(type(somma))
contNumeri = int(0)
print(type(contNumeri))
numero = int(input("Inserisci un numero diverso da 0 >>> "))
contNumeri = contNumeri + 1
if numero != 0:
    while numero != 0:
        somma = somma + numero
        numero = int(input("Inserisci un numero diverso da 0 >>> "))
        contNumeri = contNumeri + 1
    contNumeri = contNumeri - 1
    somma = somma / contNumeri
    print("Media", somma)

else:
    print("Attenzione hai inserito 0 al primo tentativo e NON VA BENE")