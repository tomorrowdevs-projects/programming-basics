print('salve questo e il primo programma di python della prima milestone')
print ('vuoi in piedi quadrati o metri quadrati? scrivi M per metri quadrati o P per piedi quadrati  ') 
scelta=input()
larghezza = float(input('Inserisci il valore della larghezza '))#faccio mettere i valore di largezza
lunghezza = float(input('Inserisci il valore dell´lunghezza '))#faccio mettere i valore di lunghezza
if scelta == 'M':
    print(f"L'Area della stanza è: {larghezza * lunghezza}")
elif scelta=='P':
    print(f"L'Area della stanza in piedi quadrati è: {larghezza * lunghezza}")
else:
    print('il valore inserito non è consentito nella scelta')
