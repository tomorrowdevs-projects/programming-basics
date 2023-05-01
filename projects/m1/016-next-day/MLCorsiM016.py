""" COMMENTARE IL PROGRAMMA 
Il programma prevede l'immissione di una data da tastiera e calcola il giorno successivo
La funzione verifica calcola nel caso del giorno 28 del mese di febbraio se l'anno è bisestile"""
import calendar
# Carico la lista dei giorni del mese   
giorni = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
# Utilizzo la variabile controllo dopo che ho ...... con le IF
controllo = int(0)
# Inserisco la data specificando il formato
dataStr = input("Inserisci la data nel formato gg/mm/aaaa ")
# Connverto la stringa in una lista utilizzanzo il metodo SPLIT e indicando che il separatore è lo / 
dataStr = dataStr.split('/')
# Assegno i valori della lista alle variabili e prparo l'indice per la lista sottraendo 1 a mese (l'indice va da 0 a n)
giorno, mese, anno = dataStr
meseapp = int(mese)
meseapp = meseapp - 1
anno = int(anno)
giorno = int(giorno)
# Primo controllo se è l'ultimo giorno di dicembre, in questo caso incremento l'anno e controllo va a 1
if int(giorno) == 31 and int(mese) == 12:
    anno = int(anno) + 1
    print("Nuova data 01/01/",anno)
    controllo = 1
# Se il controllo precedente è FALSO eseguo un controllo per vedere se si tratta di febbraio ed è il giorno 28
elif int(mese) == 2 and int(giorno) == 28:
    # Se è vero verifico se l'anno è bisestile perchè in questo caso il giorno successivo sarà il 29 e controllo va a 1
    val = calendar.isleap(anno) 
    if val == True:
        a = input("Premi enter - dentro bisestile")
        giorno = int(giorno) + 1
        print("Nuova data", giorno, "/02/", anno)
        controllo = 1
# Se controllo è rimasto a 0 vuol dire che nessuna delle precedenti condizioni si è verificata
# A questo punto controllo se ho inserito l'ultimo giorno del mese in caso affermativo incremento il mese SE FALSO incremento il giorno
if controllo == 0:
    if giorno == giorni[meseapp]:
        mese = int(mese) + 1
        print("Nuova data 01/", mese, "/", anno)
    else:
        giorno = int(giorno) + 1
        print("Nuova data", giorno, "/", mese, "/", anno)







  
    


