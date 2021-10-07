print("inserisci il numero di bottiglie ")
#faccio mettere i valori delle bottiglie
numberOfSmallBottles = float(input('Inserisci il numero di bottiglie inferiori a un litro '))
numberOfbigBottles = float(input('Inserisci il numero di bottiglie superiori a un litro '))
valtot=(numberOfSmallBottles*0.1)+(numberOfbigBottles*0.25)

print(f"il valore da restituire è: " + str(valtot))