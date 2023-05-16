"""
# Reverse Order

Write a program that reads integers from the user and stores them in an array. 
Use 0 as a sentinel value to mark the end of the input. Once all of the values have been read your program should display them (except for the 0) in reverse order, with one value appearing on each line.

# Documentation

For this project solution you may use:

- Arrays (Lists)

# Deadline

This project requires to be completed in a maximum of **2 hours**
"""
numeri = []
while True:
  numero = int(input("Inserisci un numero intero (0 per terminare): "))
  if numero == 0:
    break
  numeri.append(numero)

numeri.reverse()
for n in numeri:
  print(n)
  