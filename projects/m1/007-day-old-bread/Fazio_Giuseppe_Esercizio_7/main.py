# M7   -    Sconto pane del giorno prima
num_pane=0
costo_pane=3.49
SCONTO= 60  #60%
copa_scontato= costo_pane*SCONTO/100
sconto=costo_pane-copa_scontato
num_pane=  int (input("inserisci il numero di pagnotte del giorno prima"))

print('Numero delle pagnotte rafferme = {0:^20.2f}'.format(num_pane))
print('Totale sconto =                  {0:^20.2f}'.format(num_pane*sconto))
