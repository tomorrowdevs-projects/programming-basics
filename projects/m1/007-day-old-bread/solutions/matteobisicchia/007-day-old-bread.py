PRICEOLDBREAD=3.49
quantity= float(input("inserisci il numero di pagnotte che si desidera :  "))
totpar=float( PRICEOLDBREAD*quantity)
solddiscount=float (totpar*0.4)
print("il costo del pane è :| " + str(totpar)+
     " | con uno sconto del 60 % il totale è : | " 
      + str(solddiscount)+"|")
