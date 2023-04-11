"""
An integer, *n*, is said to be perfect when the sum of all of the proper divisors of *n*
is equal to *n*.
For example, 28 is a perfect number because its proper divisors are 1, 2, 4, 7 and 14,
and 1 + 2 + 4 + 7 + 14 = 28.
Write a function that determines whether or not a positive integer is perfect.
Your function will take one parameter.
If that parameter is a perfect number then your function will return True.
Otherwise it will return False.
In addition, write a main program that uses your function to identify
and display all of the perfect numbers between 1 and 10,000.

"""
def perfect_number(num):
    list=[]
    #determinazione di tutti i divisori del numero num
    for i in range(1, num):
        if num % i == 0:
            list.append(i)
    #verifica se è un numero perfetto
    if sum(list)==num:
        return True
    else:
        return False

if __name__=='__main__':
    #inserire un numero e verificare se è un numero perfetto
    print(perfect_number(int(str(input("Insert number:")))))
    lista=[]
    #numeri perfetti tra 1 e 10000
    for i in range(0,10001):
        if perfect_number(i):
            lista.append(i)
    print(lista)

