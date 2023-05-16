import math

x1=float(input("Inserisci la prima coordinata x:"))
y1=float(input("Inserisci la prima coordinata y:"))

perimetro=0
prec_x = x1
prec_y = y1

while True:
    x=input("Inserisci la prossima coordinata x (enter per uscire) ") #termina quando inserisce la stringa vuota ""
    if x == "": # "" è la stringa vuota
        break #esce dal ciclo
    x=float(x) #altrimenti fa il cast e il calcolo successivo
    y = float(input("Inserisci la prossima coordinata y:"))
    distanza = math.sqrt ((x-prec_x) **2 + (y-prec_y) **2 )
    perimetro += distanza
    prec_x = x
    prec_y =y

# Aggiungi la distanza dall'ultimo punto al primo punto
distanza = math.sqrt((x1 - prec_x) ** 2 + (y1 - prec_y) ** 2)
perimetro += distanza

# visualizza il perimetro del poligono
print("Il perimetro del poligono è: ", perimetro)
