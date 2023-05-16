def decimale_binario(n):
    if n==0:
        return "0"
    elif n==1:
        return "1"
    return decimale_binario(n//2)+str(n%2)
if __name__ == '__main__':
    a=int(input("Inserisci un numero positivo "))
    if a<0:
        print("Errore")
    print(f"{a}\t-->\t{decimale_binario(a)}")
