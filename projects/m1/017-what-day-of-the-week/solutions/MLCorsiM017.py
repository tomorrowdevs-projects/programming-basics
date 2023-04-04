import os
import math
""" Il programma visualizza il giorno della settimana del giorno 1 gennaio dell'anno immesso da tastiera
    importo i moduli OS e MATH - OS mi serve per pulire lo schermo - MATH per utilizzare la funzione FLOOR
    genero una TUPLA - per inserire i giorni della settimana - i dati nella TUPLA non saranno mai modificati"""
giorno = ("domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato")
# pulisco lo schermo
os.system("cls")
# print(giorno) # usato per controllare la TUPLA
# inserisco l'anno
dataInput=int(input("Inserisci l'anno "))
# calcolo il valore 
dataCalc = (dataInput + math.floor((dataInput - 1) / 4) - math.floor((dataInput - 1) / 100) + math.floor((dataInput - 1) / 400)) % 7
# visualizzo il giorno della settimana
print(giorno[dataCalc])