#Calcolo del rimborso in base al deposito di bottiglie di capacità minori o = a ilitro o maggiori di un litro #
num_bottle_small= int (input("Inserisci il numero di bottiglie piccole che depositi:"))
num_bottle_large= int (input("Inserisci il numero di bottiglie grandi che depositi:"))

rimborso= num_bottle_small*0.1+ num_bottle_large*0.25


print (f"il rimborso che riceverai è pari a :$")
print (format(rimborso, '.2f'))

