"""
In this exercise,
you will create a program that reads words from the user until the user enters a blank line.
After the user enters a blank line your program should display
each word entered by the user exactly once.
The words should be displayed in the same order that they were first entered.

For example, if the user enters:
*first*
*second*
*first*
*third*
*second*

then your program should display:
*first*
*second*
*third*
"""
def crea_lista():
    list1=[]
    c=str(input("Insert word [blank line end]: "))
    while c!="":
        list1.append(c)
        c = str(input("Insert word [blank line end]:"))
    return list1

def listToSet(listw):
    list2 = []
    unique_list = [x for x in listw if x not in list2 and not list2.append(x)]
    return list2

if __name__=='__main__':
    lista=crea_lista()
    #lista=["ciao","sono","Silvio","ciao","sono","felice"]
    lista1=listToSet(lista)
    print(lista)
    print(lista1)