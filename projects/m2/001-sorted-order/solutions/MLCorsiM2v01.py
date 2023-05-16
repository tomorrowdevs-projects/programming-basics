import os
import math
# Programma M2-001
""" Scrivete un programma che legga numeri interi dall'utente e li memorizzi in un array. 
Il programma dovrebbe continuare a leggere i valori finché l'utente non inserisce 0. 
Visualizzare successivamente tutti i valori inseriti dall'utente (tranne lo 0) 
in ordine crescente, con un valore che appare su ogni riga. 
Utilizzare il metodo sort o la funzione sorted per ordinare l'array."""
os.system("cls")
num = int(0) 
#print(type(num))
vet =[]
#print(type(vet))
num = int(input("Inserisci un numero diverso da 0 >>> "))
if num != 0:
    while num != 0:
        vet.append(num)
        num = int(input("Inserisci un numero diverso da 0 >>> "))
ind=len(vet)
#print(ind)
cont = ind
#print(cont)
ind = 0
#print(ind)
os.system("cls")
vet.sort()
for ind in range(cont):
    print(vet[ind]) 
#print(vet)