# Programma per il calcolo del deposito
# Marco Luigi CORSI
print("Calcolo del deposito")
print(" ")
num1 = int(input("Inserisci le bottiglie che contengono fino ad un Litro - 0 se non ci sono >>> "))
num2 = int(input("Inserisci le bottiglie che contengono più di un Litro - 0 se non ci sono >>> "))

# calcolo
calcolo = (num1 * 0.10) + (num2 * 0.25)
print("La somma dovuta è %s"%(u"\N{euro sign} {:.2f}".format(calcolo)))


