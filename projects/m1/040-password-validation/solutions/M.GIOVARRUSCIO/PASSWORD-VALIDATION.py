"""
In this exercise you will write a function that determines whether or not a password is good.
We will define a good password to be a one that is at least 8 characters long and contains
at least one uppercase letter,
at least one lowercase letter,
and at least one number.
Your function should return True if the password passed to it as its only parameter is good.
Otherwise it should return False.
Include a main program that reads a password from the user and reports whether or not it is good.
Ensure that your main program only runs when your solution has not been imported into
another file.

"""
lista=['0','1','2','3','4','5','6','7','8','9']
def controlla(st):
    #least 8 characters long
    if len(s)>8:
        maiuscola=0
        minuscola=0
        for i in s:
            if i.isupper():
                maiuscola=1
            else:
                minuscola=1
        #at least one uppercase letter,
        #at least one lowercase letter,
        if maiuscola==1 and minuscola==1:
            num=0
            #and at least one number
            for i in s:
                if i in lista:
                    num=1
            if num>0:
                return True
            else:
                return False
        else:
            return False

    else:
        return False
if __name__ == '__main__':
    s=input("Inserisci stringa:")
    if(controlla(s)):
        print("PASSWORD BUONA")
    else:
        print("PASSWORD NON BUONA")
