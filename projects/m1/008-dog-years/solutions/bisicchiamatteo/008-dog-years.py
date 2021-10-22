quantity= float(input("inserisci il numero di anni che si desidera :  "))
if ((quantity ==0) and (quantity <= 2)):
    tot = float(quantity*10.5)
    print(" l'età del cane è : "+str(tot))
if(quantity>2):
    tot= float(21+ (quantity-2)*4)
    print(" l'età del cane è : "+str(tot))
if(quantity<0) :
    print("errore è stato inserito un valore non consono")