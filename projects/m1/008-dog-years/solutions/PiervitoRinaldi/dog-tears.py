# DOG YEARS
# Converte anni umani in anni canini

anniUmani= int(input) # Inserisci un numero di anni umani

firstYears= 10.5*2
afterYears= (anniUmani-2)*4

if anniUmani <=0:
    print('Errore: assegna un valore positivo alla variabile "anniUmani"')
elif anniUmani ==1:
    print("anni canini corrispondenti: 10.5")
else:
    print("Anni canini corrspondenti: ", firstYears+afterYears)
