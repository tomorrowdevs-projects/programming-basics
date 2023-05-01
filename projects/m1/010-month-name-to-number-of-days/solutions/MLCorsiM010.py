# Develop a program that reads a four-digit integer from the user
# and displays the sum of its digits.
# uso del modulo CALENDAR per verificare se l'anno inserito è bisestile o meno
import calendar
giorni = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
mese = int(input("Inserisci il mese >>>"))
# al mese inserito sottraggo 1 per usarlo come indice del vettore
mese = mese -1
anno = int(input("Inserisci l'anno >>>"))
# memorizzo il risultato TRUE o FALSE nella variabile val
val = calendar.isleap(anno) 
# se val è uguale a vero (true) e il mese inserito è febbraio (2) aggiungo un giorno (giorno = giorni[mese] + 1) altrimenti visualizzo i giorni del mese senza fare nulla
if val == True and mese == 1:
    giorno = giorni[mese] + 1
    print("Anno bisestile, i giorni del mese sono: ", giorno)
else:
    print("I giorni del mese sono: ", giorni[mese])
