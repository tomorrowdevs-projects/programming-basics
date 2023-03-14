def somma_cifre():
    '''somma le cifre di un numero a quattro cifre'''
    s = input("Numero di quattro cifre ")
    if len(s)!=4:
        print("Il numero non ha il numero di cifre corrette cifre corrette")
    else:
        a="{0}".format(int(s[0])+int(s[1])+int(s[2])+int(s[3]))
        print("La somma delle cifre è ",a)
    return
if __name__=='__main__':
    somma_cifre()
