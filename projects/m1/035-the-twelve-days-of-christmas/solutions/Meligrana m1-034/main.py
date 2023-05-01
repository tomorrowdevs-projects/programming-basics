def ordinali(n=0):
    if n<1 or n>12:
        return ''
    nord=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth"]
    return(nord[n-1])
if __name__=='__main__':
    n=int(input("Inserisci un numero tra 1 e 12 "))
    print(f"Al cardinale {n} corrisponde l'ordinale {ordinali(n)}")

