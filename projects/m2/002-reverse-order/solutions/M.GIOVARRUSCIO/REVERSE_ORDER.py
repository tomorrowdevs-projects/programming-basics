"""
Write a program that reads integers from the user and stores them in an array.
Use 0 as a sentinel value to mark the end of the input.
Once all of the values have been read your program should display them (except for the 0)
in reverse order, with one value appearing on each line.
"""
def crea_lista():
    num1=[]
    c=int(str(input("Insert number [0 end]: ")))
    while c!=0:
        num1.append(c)
        c = int(str(input("Insert number [0 end]:")))
    return num1

if __name__=='__main__':
    num=crea_lista()
    num.sort(reverse=True)
    for i in num:
        print(i)

