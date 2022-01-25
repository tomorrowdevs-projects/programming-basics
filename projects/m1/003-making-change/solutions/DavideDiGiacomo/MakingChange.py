#variabili
Toonies = 2
Loonies = 1
Quarters = 0.25
Dimes = 0.10
Nickels = 0.05
Pennies = 0.01
monete = [" toonies", " loonies", " quarters", " dimes", " nickels", " pennies"]

print ("Benvenuto al cambio monete automatico!!")
print ("Inserisci l'importo da cambiare da cambiare in monete:")
resto = float(input())

#Divisione del resto in monete
print ("Il tuo cambio è composto da:")
resto1 = resto // Toonies
resto = resto % Toonies
resto2 = resto // Loonies
resto = resto % Loonies
resto3 = resto // Quarters
resto = resto % Quarters
resto4 = resto // Dimes
resto = resto % Dimes
resto5 = resto // Nickels
resto = resto % Nickels
resto6 = resto // Pennies
restotot = [resto1, resto2, resto3, resto4, resto5, resto6]
print (str(restotot[0]) + str(monete[0])) 
print (str(restotot[1]) + str(monete[1]))
print (str(restotot[2]) + str(monete[2]))
print (str(restotot[3]) + str(monete[3]))
print (str(restotot[4]) + str(monete[4]))
print (str(restotot[5]) + str(monete[5]))
