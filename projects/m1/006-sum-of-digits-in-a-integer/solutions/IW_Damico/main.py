# somma degli elementi di un numero

int_number = input("Inserire un numero intero di 4 cifre da sommare ")
somma = 0
for numero in int_number:
    somma = somma + int(numero)

print("la somma del numero inserito è ", somma)
