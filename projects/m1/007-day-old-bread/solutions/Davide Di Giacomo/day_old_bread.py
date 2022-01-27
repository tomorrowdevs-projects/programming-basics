import math

#variabili
pane = 3.49
pane_vecchio = round (3.49 * (60/100), 2)

print ("Benvenuto nel mio panificio! Solo per oggi offerta speciale! Pane di ieri al 60% di sconto!")
print ("Inserisci il numero di pagnotte in offerta che vuoi acquistare:")
numero_pani = int(input())
print ("Perfetto, vuoi acquistare " + str(numero_pani) + " pagnotte scontate!")
print ("Il costo della pagnotta a prezzo pieno è di: " + str(pane) + "€")
costo_tot = pane * numero_pani

# definiamo una funzione per arrotondare
def round_up(costo_tot, decimals = 0): 
    multiplier = 10 ** decimals 
    return math.ceil(costo_tot * multiplier) / multiplier
print ("Il costo totale delle pagnotte a prezzo pieno è di: " + str(round_up(costo_tot, 2)) + "€")

#calcolo costo totale pagnotte prezzo scontato
print ("Il costo della pagnotta scontata è di: " + str(pane_vecchio) + "€")
offerta_tot = pane_vecchio * numero_pani
print ("Il costo totale delle pagnotte scontate è di: " + str(round_up(offerta_tot, 2)) + "€")