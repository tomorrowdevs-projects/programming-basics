
cont=0 #contatore
tot=0 #totale

valore = float(input("Inserisci un valore, (0 per terminare)"))

if valore == 0:
    print("Il primo valore inserito non può essere zero")


else:
      while valore != 0:
        tot += valore
        cont += 1
        valore=float(input("Inserisci un valore, (0 per terminare)"))
      media = tot/cont #stessa indentazione del while
      print("la media è: ", media) #idem
