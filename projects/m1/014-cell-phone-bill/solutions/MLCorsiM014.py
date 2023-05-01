# Prima versione 
import os
os.system("cls")
print(" ___ Fattura cellulare ___ ")
print(" ")
print(" ")
print(" ")
print("___ Inserisci i dati richiesti ___")
minuti = int(input("___ Inserisci i minuti di conversazione del cliente >>> "))
sms = int(input("___ Inserisci il numero di SMS inviati >>> "))
if minuti > 50:
    extra = minuti - 50
    impminuti = extra * 0.25
if sms > 50:
    extrasms = sms - 50
    impsms = extrasms = 0.15
os.system("cls")
print("Importo abbonamento >>>                € 15.00")
print("Costo aggiuntivo 911 >>>               €  0.44")
print("Importo costo minuti aggiuntivi >>>    €", "{:.2f}".format(impminuti))
print("Importo SMS aggiuntivi >>>             €", "{:.2f}".format(impsms))
impminuti = 15.00 + 0.44 + impminuti + impsms
print("Totale fattura >>>                     €", "{:.2f}".format(impminuti))
impminuti = impminuti + (impminuti / 100 * 5)
print ("Totale fattura + iva 0.5               €", "{:.2f}".format(impminuti))


