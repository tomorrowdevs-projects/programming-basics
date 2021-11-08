total=0
cont_numbers=0
while True:
    number=(input("inserisci un valore "))
    if (number=="0"):
        if (cont_numbers==0):
            print ("errore hai inseritoun valore non consentito")
            continue
        else:
            break
    total=float(number)+total
    cont_numbers=cont_numbers+1
average= total/float(cont_numbers)
print (" hai inserito  "+ str (cont_numbers) + " e la media =" +str (average))