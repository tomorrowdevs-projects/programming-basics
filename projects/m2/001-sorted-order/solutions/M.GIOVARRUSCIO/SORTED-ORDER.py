"""
Write a program that reads integers from the user and stores them in an array.
Your program should continue reading values until the user enters 0.
Then it should display all of the values entered by the user (except for the 0)
in ascending order, with one value appearing on each line.
Use either the sort method or the sorted function to sort the array.
"""

def crea_lista():
    num1=[]
    c=int(str(input("Insert number [0 end]: ")))
    while int(c)!=0:
        num1.append(c)
        c = int(str(input("Insert number [0 end]:")))
    return num1

if __name__=='__main__':
    num=crea_lista()
    num.sort()
    for i in num:
        print(i)


