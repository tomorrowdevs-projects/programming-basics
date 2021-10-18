print("inserisci il numero di bottiglie ")
#faccio mettere i valori delle bottiglie
picbot = float(input('Inserisci il numero di bottiglie inferiori a un litro '))
grabot = float(input('Inserisci il numero di bottiglie superiori a un litro '))
valtot=(picbot*0.1)+(grabot*0.25)

print(f"il valore da restituire è: " + str(valtot))