"""
A proper divisor of a positive integer, *n*, is a positive integer less than *n*
which divides evenly into *n*.
Write a function that computes all of the proper divisors of a positive integer.
The integer will be passed to the function as its only parameter.
The function will return a list containing all of the proper divisors as its only result.
Complete this exercise by writing a main program that demonstrates
the function by reading a value from the user and displaying the list of its proper divisors.
Ensure that your main program only runs when your solution has not been imported into another file.

"""
def divide_proper(num):
    list=[]
    #determinazione di tutti i divisori del numero num
    for i in range(2, num + 1):
        if num % i == 0:
            list.append(i)
    return list
if __name__=='__main__':
    number=int(str(input("Insert number:")))
    lista=divide_proper(number)
    print(lista)