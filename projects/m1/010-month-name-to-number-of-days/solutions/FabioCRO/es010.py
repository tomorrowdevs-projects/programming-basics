mese = input("inserisci il mese ")

trentuno = {'gennaio', 'marzo', 'maggio', 'luglio', 'agosto','ottobre', 'dicembre' } #uso insiemi
trenta = {'aprile', 'giugno', 'settembre', 'novembre'}
ventotto = {'febbraio'}
if mese in trentuno:
    print(f"il mese inserito {mese},ha 31 giorni")

elif mese in trenta:
    print(f"il mese inserito {mese}, ha 30 giorni")

elif mese in ventotto:
   print(f"il mese inserito {mese}, ha 28 o 29 giorni")

else:
    print(f"errore di inserimento del mese...")
