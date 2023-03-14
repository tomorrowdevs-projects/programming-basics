print("""\
Questo programma permette di calcolare 
il resto da restituire minimizzando
il numero di monete da restituire.
""")
#INSERIMENTO IMPORTO
coin=int(input("Inserisci resto da restituire:"))
#SETTAGGIO A ZERO DELLE VARIABILI RAPPRESENTANTI
#I TIPI DI MONETE DA RESTITUIRE
c200 = 0
c100 = 0
c25 = 0
c10 = 0
c5 = 0
c1 = 0
#CALCOLO DELLE MONETE SECONDO IL CRITERIO RICHIESTO
#DALLA MONETA DI VALORE MAGGIORE A QUELLA DI VALORE
#PIU' PICCOLO
while coin > 0:
    if coin >= 200:
        coin = coin - 200
        c200 = c200 + 1
    elif coin >= 100:
        coin = coin - 100
        c100 = c100 + 1
    elif coin >= 25:
        coin = coin - 25
        c25 = c25 + 1
    elif coin >= 10:
        coin = coin - 10
        c10 = c10 + 1
    elif coin >= 5:
        coin = coin - 5
        c5 = c5 + 1
    else:
        coin = coin - 1
        c1 = c1 + 1
#STAMPA DEL RISULTATO
print('n° moneta da 2 dollari {0:d} \n'
      'n° moneta da 1 dollaro {1:d} \n'
      'n° moneta da 25 centesimi {2:d} \n'
      'n° moneta da 10 centesimi {3:d} \n'
      'n° moneta da 5 centesimi {4:d}\n'
      'n° moneta da 1 centesimo {5:d}\n'.format(c200, c100, c25, c10, c5, c1))
