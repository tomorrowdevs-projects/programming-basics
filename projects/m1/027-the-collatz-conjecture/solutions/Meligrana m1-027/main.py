if __name__ == '__main__':
    n=int(input("Inserisci un numero positivo: "))
    while(n>0):
        s = ""
        s+=str(n)+" "
        while(n!=1):
            if(n%2==0):
                n=n//2
            else:
                n=n*3+1
            s += str(n) + " "
        print(s)
        n = int(input("Inserisci un numero positivo: "))

