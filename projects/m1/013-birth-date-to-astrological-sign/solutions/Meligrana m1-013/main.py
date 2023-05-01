def stampa(m=''):
    print(" Il tuo segno zodiacale è ",m)
    return
if __name__=='__main__':
    giorno=int(input("Il tuo giorno di nascita? "))
    mese = input("Il tuo mese di nascita? ")
    if (giorno in range(22,31) and mese=="dicembre") or (giorno in range(1,19) and mese=="gennaio"):
        stampa("Capricorno")
    elif (giorno in range(20,31) and mese=="gennaio") or (giorno in range(1,18) and mese=="febbraio"):
        stampa("Acquario")
    elif (giorno in range(21,31) and mese=="marzo") or (giorno in range(1,19) and mese=="aprile"):
        stampa("Ariete")
    elif (giorno in range(20,30) and mese=="aprile") or (giorno in range(1,20) and mese=="maggio"):
        stampa("Toro")
    elif (giorno in range(21,31) and mese=="maggio") or (giorno in range(1,20) and mese=="giugno"):
        stampa("Gemelli")
    elif (giorno in range(21,30) and mese=="giugno") or (giorno in range(1,22) and mese=="luglio"):
        stampa("Cancro")
    elif (giorno in range(23,31) and mese=="luglio") or (giorno in range(1,22) and mese=="agosto"):
        stampa("Leone")
    elif (giorno in range(23,31) and mese=="agosto") or (giorno in range(1,22) and mese=="settembre"):
        stampa("Vergine")
    elif (giorno in range(23,30) and mese=="settembre") or (giorno in range(1,22) and mese=="ottobre"):
        stampa("Bilancia")
    elif (giorno in range(23, 31) and mese == "ottobre") or (giorno in range(1, 21) and mese == "novembre"):
        stampa("Scorpione")
    elif (giorno in range(22,30) and mese=="novembre") or (giorno in range(1,21) and mese=="dicembre"):
        stampa("Sagittario")


