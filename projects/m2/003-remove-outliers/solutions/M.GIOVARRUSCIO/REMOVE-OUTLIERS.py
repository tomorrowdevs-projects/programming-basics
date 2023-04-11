"""
When analysing data collected as part of a science experiment it may be desirable
to remove the most extreme values before performing other calculations.
Write a function that takes a list of values and an non-negative integer, n, as its parameters.
The function should create a new copy of the list with the n largest elements
and the n smallest elements removed.
Then it should return the new copy of the list as the function’s only result.
The order of the elements in the returned list does not have to
match the order of the elements in the original list.
Write a main program that demonstrates your function. It should read a list of
numbers from the user and remove the two largest and two smallest values
from it by calling the function described previously.
Display the list with the outliers removed, followed by the original list.
Your program should generate an appropriate error message if the user enters less than 4 values.
"""
def del_lista(lista,num):
    #code
    list2=[]
    list1=[]
    for i in lista:
        list2.append(i)
    #ordina in modo crescente la lista
    list2.sort()
    #rimuove i primi n elementi e gli ultimi n elementi
    i1=num-1
    i2=len(list2)-num
    i3=len(list2)
    for i in range(0,i3):
        if (i>i1) and (i<i2):
            list1.append(list2[i])
    return list1
def crea_lista():
    num1=[]
    c=int(str(input("Insert number [0 end]: ")))
    while c!=0:
        num1.append(c)
        c = int(str(input("Insert number [0 end]:")))
    return num1
if __name__=='__main__':
    list=crea_lista()
    list3=[]
    n=int(str(input("Inserire valore n di elementi da eliminare")))
    list3=del_lista(list,n)
    print(list)
    print(list3)