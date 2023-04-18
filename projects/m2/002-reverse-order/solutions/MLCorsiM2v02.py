import os
import math
# Programma M2-001
""" Scrivete un programma che legga numeri interi dall'utente e li memorizzi in un array. 
Utilizzare 0 come valore sentinella per contrassegnare la fine dell'input. 
Una volta che tutti i valori sono stati letti, il programma dovrebbe visualizzarli (tranne lo 0) in ordine inverso, con un valore che appare su ciascuna riga."""
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
vet.sort(reverse=True)
for ind in range(cont):
    print(vet[ind]) 
#print(vet)