
pezzi_pane = int(input(" Numero di pagnotte raffermo "))
prezzo_intero = pezzi_pane*3.49
prezzo_scontato =prezzo_intero*(1-0.6)


print("Prezzo pane al pezzo € 3,49 - n° pezzi", pezzi_pane, " = Totale", prezzo_intero, "€")
print("Prezzo sconato", round(prezzo_scontato, 2), "€")