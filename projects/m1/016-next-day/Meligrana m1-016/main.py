def bisestile(anno=0):
    if anno%400==0:
        return True
    else:
        if anno%100==0:
            return False
        else:
            if anno%4==0:
                return True
            else:
                return False

if __name__=='__main__':
    mesi_da_30=[11,4,6,9]
    mesi_da_31=[1,3,5,7,8,10,12]
    g=int(input("giorno: "))
    m=int(input("mese: "))
    a=int(input("anno: "))
    if g==31 and m==12:
        anno=a+1
    else:
        anno=a
    if (m in mesi_da_30 and g==30) or (m in mesi_da_31 and g==31) or (m==2 and bisestile(a) and g==29) or (m==2 and not bisestile(a) and g==28):
        mese=m%12+1
    else:
        mese=m
    if  m==2:
        if bisestile(a):
            giorno=g%29+1
        else:
            giorno=g%28+1
    elif m in mesi_da_30:
        giorno=g%30+1
    else:
        giorno=g%31+1
    print(f"Il giorno successivo a {g}-{m}-{a} è {giorno}-{mese}-{anno}")