if __name__=='__main__':
    decimale=int(input("Scrivi un numero decimale "))
    binario=''
    resto=decimale%2
    binario=str(resto)+binario
    quoziente=decimale//2
    while quoziente!=0:
        resto = quoziente % 2
        binario = str(resto) + binario
        quoziente = quoziente // 2
    print("binario corrispondente=", binario)
