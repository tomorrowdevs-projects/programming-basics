x=str(input("insert a number:"))
y=str(input("insert a number:"))

def hex2int(string):
    if len(string)>1:
        return "lunghezza non valida"
    try:
        return int(string,16)
    except ValueError:
        return "valore non valido"
    
def int2hex(string2):
    lst=["A","B","C","D","E","F"]
    try:
        tohex=int(string2)
        if tohex>=16:
            return "non valido"
        elif tohex>9 and tohex<16:
            i=tohex-10
            converted_ex= lst[i]
            return converted_ex
        return tohex
        
    except ValueError:
        return "valore non accettato"
    
    
print(hex2int(x))
print(int2hex(y))