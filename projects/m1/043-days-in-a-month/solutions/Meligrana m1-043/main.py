def giorni_in_un_mese(mese,anno):
    if mese==2:
        if anno%400==0:
            return 29
        elif anno%100==0:
            return 28
        elif anno%4==0:
            return 29
        else:
            return 28
    elif mese in [4,6,9,11]:
        return 30
    return 31
if __name__ == '__main__':
    mesi=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]
    mese=int(input("Mese: "))
    anno=int(input("Anno: "))
    giorni=giorni_in_un_mese(mese,anno)
    print(f"Il mese di {mesi[mese-1]} dell'anno {anno} è di {giorni} giorni")


