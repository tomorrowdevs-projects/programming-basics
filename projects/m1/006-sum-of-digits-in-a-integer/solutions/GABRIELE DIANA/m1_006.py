# Develop a program that reads a four-digit integer from the user and displays the sum of its digits. 
# For example, if the user enters 3141 then your program should display 3+1+4+1=9.

numero = input("inserisci 4 cifre : ")

M = int(numero[0])
C = int(numero [1])
D = int(numero [2])
U = int(numero [3])

print(str(M) + "+" + str(C) + "+" + str(D) + "+" + str(U) + "=" + str(M+C+D+U))