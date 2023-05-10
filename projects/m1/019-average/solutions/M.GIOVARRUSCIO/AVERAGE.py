"""
In this exercise you will create a program that computes the average
of a collection of values entered by the user.
The user will enter 0 as a sentinel value to indicate that no further values will be provided.
Your program should display an appropriate
error message if the first value entered by the user is 0.

Hint: Because the 0 marks the end of the input it should not be included in the average.

"""
c=int(input("Inserisci un valore:"))
if c==0:
    print('Non è possibile inserire il valore',c,'come primo valore')
else:
    i=0
    sum=0
    while c!=0:
        sum+=c
        i+=1
        sum/=i
        c=int(input("Inserisci un valore:"))
    print('La media dei ',i,' valori inseriti è:',sum)