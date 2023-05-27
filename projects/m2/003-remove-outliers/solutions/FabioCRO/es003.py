def rimuovi_valorianomali(valore, n):
     if len(valore) < 4:
          print("Errore: la lista deve contenere almeno 4 elementi")# la lista deve contenere almeno 4 elementi
          return None
     valori_ordinati = sorted(valori) #ordina la lista
     return valori_ordinati[n:-n]# toglie dalla lista gli n elementi più piccoli e gli n elementi più grandi,
     #individuati dagli indici

if __name__ == "__main__":
     valori = input("Inserisci una lista di valori numerici, separati dallo spazio: ")
     valori = list(map(float, valori.split()))
     # si assume che la stringa aquisita da input sia costituita da elementi separati da spazio.
     # Il metodo split() applicato alla stringa valori resituisce la lista degli elementi della stinga separati
     # dallo spazio (non è specificato nulla e quindi l'elemento separatore è lo spazio) in cui ciascun elemento
     #è a sua volta una stringa.
     # Successivamnete converte la lista delle sottostringhe in valori di tipo float, quindi valori sarà una
     #lista di float
     valorianomali_rimossi = rimuovi_valorianomali(valori, 2)#invoca la funzione con n=2

     if valorianomali_rimossi is not None:
          print("Lista con valori anomali rimossi:", valorianomali_rimossi)
          print("lista originale:", valori)


