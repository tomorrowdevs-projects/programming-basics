
def hex2int(dato):
    lettere=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    esa=dato.upper()
    if esa in lettere:
        return lettere.index(esa), f"cifra decimale equivalente alla cifra esadecimale {esa}"
    else:
        return None,"Cifra esadecimale non valida"
def int2hex(deci:int):
    lettere = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    if 0<=deci<=15 :
        return lettere[deci], f"cifra esadecimale equivalente al numero decimale {deci}"
    else:
        return f"{deci}", "Numero  decimale non valido"

if __name__=='__main__':
    a=input("Cifra esadecimale: ")
    print(f"{hex2int(a)[0]}\t{hex2int(a)[1]}")
    b = int(input("Cifra decimale: "))
    print(f"{int2hex(b)[0]}\t{int2hex(b)[1]}")