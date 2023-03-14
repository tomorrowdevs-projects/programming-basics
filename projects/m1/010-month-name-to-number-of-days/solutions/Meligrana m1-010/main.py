def conversione_mese(m=None):
    if m in ("gennaio","marzo","maggio","luglio","agosto","ottobre","dicembre"):
        print(f" {m} è di 31 giorni")
    elif  m in ("novembre","aprile","giugno","settembre"):
        print(f" {m} è di 30 giorni")
    elif m in ("febbraio"):
        print(f" {m} è di 28 o 29 giorni")
    else:
        print(f" {m} mese non valido")
    return
if __name__=='__main__':
    m=str(input("Inserisci il nome di un mese "))
    conversione_mese(m)
