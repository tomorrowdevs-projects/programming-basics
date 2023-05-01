# Dog years
anni: int = 0
print ("inseire anni 100 per uscire dal ciclo")
while (anni<=0):
    anni = int (input ("Quanti anni ha il tuo  cane? "))

if (anni<=0):
                print("Errore")
elif (anni<=2):
                 print("Anni umani =)", anni*10.5)
else: print("Anni umani =", 2*10.5 + (anni-2)*4)




