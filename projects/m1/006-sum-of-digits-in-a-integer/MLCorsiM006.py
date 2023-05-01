# Develop a program that reads a four-digit integer from the user
# and displays the sum of its digits.
numero = input("Inserisci un numero di 4 cifre: >>> ")
somma = 0
for n in numero:
    somma += int(n)

print("La somma delle 4 cifre è: ", somma)