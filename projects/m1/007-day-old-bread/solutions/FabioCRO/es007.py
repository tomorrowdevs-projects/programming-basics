# Aquisizione del numero di pagnotte di pane raffermo acquistate
num_pagnotte = int(input("Quante pagnotte di pane raffermo hai acquistato? "))

# Calcolo del prezzo normale e scontato per ogni pagnotta
prezzo_normale = 3.49
sconto_percentuale = 60
prezzo_scontato = prezzo_normale * (100 - sconto_percentuale) / 100

# Calcolo del prezzo totale del pane raffermo acquistato
prezzo_totale = num_pagnotte * prezzo_scontato


print(f"Prezzo normale per pagnotte di pane: {prezzo_normale:.2f} euro")
print(f"Sconto sul prezzo per pane raffermo: {sconto_percentuale}%")
print(f"Prezzo scontato per pagnotte di pane: {prezzo_scontato:.2f} euro")
print(f"Prezzo totale per {num_pagnotte} pagnotte di pane raffermo: {prezzo_totale:.2f} euro")



