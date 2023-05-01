# Develop a program that reads a four-digit integer from the user
# and displays the sum of its digits.
numerop = input("Inserisci un numero di pagnotte acquistate dal cliente: >>> ")
totale = int(numerop) * 3.49
print("Importo totale di acquisto per ", numerop, "pagnotte ", totale)
print("Sconto del 60% sull'importo totale ", totale)
totale = totale - (totale / 100 * 60)
print("Importo totale scontato", totale)
print("Importo scontato %s"%(u"\N{euro sign} {:.2f}".format(totale)))