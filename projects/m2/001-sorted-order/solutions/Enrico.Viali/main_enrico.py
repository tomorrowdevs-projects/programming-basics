""" Sorted Order

# Write a program that reads integers from the user and stores them in an array. 
# Then it should display all of the values entered by the user (except for the 0) in 
# ascending order, with one value appearing on each line. #
# Use either the sort method or the sorted function to sort the array.

# Documentation

# For this project solution you may use:

# - Arrays (Lists)

# Deadline

# This project requires to be completed in a maximum of **2 hours**
"""

numeri = []
while True:
    numero = int(input("inserisci un numero (0 per terminare): "))
    if numero == 0:
        break
    numeri.append(numero)

numeri.sort()
# numeri = ["dds", "dsds"]
for n in numeri:
  print(n)