#Develop a program that reads a four-digit integer from the user and displays the sum of its digits. 
#For example, if the user enters 3141 then your program should display 3+1+4+1=9.





#scrivo il numero a 4 cifre
Numero_da_sommare=input("Digita numero di 4 cifre da sommare: ")
#converto il numero in stringa
Numero_str=str(Numero_da_sommare)
#utilizzo map per covertire ogni elemento della stringa
lst_map=map(int,Numero_str)
#creo la lista con gli interi convertiti
lst_int=list(lst_map)
#sommo i numeri della lista
sum_int=sum(lst_int) 
print("la somma dei singoli numeri: ", sum_int)                      