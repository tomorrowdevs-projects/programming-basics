if __name__ == '__main__':
    '''Cripta e decripta un messaggio'''
    Maiuscole=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"]
    minuscole=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"]
    criptato=""
    messaggio=input("messaggio: ")
    shift=int(input("shift: "))
    for c in messaggio:
        if c in Maiuscole:
            k = Maiuscole.index(c)
            criptato+=Maiuscole[(k+shift)%25]
        elif c in minuscole:
            k = minuscole.index(c)
            criptato+=minuscole[(k+shift)%25]
        else:
            criptato+=c
    print(f"Il nuovo messaggio è: {criptato}")



