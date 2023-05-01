print("""\
Questo programma permette di calcolare 
il totale rimborsato in dollari 
per la restituzione dei contenitori
da 1l e superiore.
L'importo viene formattato in dollari
e con due cifre decimali.
""")
# ASSEGNAZIONE DEI VALORI ALLE COSTANTI CHE DEFINISCONO
# IL COSTO DEI DUE CONTENITORI (DA 1L E SUPERIORE)
S = 0.1
T = 0.25
#FASE DI INSERIMENTO DELLE QUANTITA' DI CONTENITORI DELLE DUE DIMENSIONI
w = int(input("Inserire i contenitori da massimo 1 litro : nr "))
m = int(input("Inserire i contenitori da più di 1 litro : nr "))
# CALCOLO DELL'IMPORTO FORMATTATO
print('Importo restituito è : $ {:10.2f}'.format(w*S+m*T))