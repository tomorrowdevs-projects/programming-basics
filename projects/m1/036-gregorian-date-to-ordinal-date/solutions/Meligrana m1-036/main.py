def bisestile(anno):
    if anno % 400 == 0:
        return True
    else:
        if anno % 100 == 0:
            return False
        else:
            if anno % 4 == 0:
                return True
            else:
                return False
def ordinalDate(g, m, a):
    giorno = g
    for i in range(1, m ):
        if i in [1, 3, 5, 6, 7, 10, 12]:
            giorno += 31
        elif i in [11, 4, 6, 9]:
            giorno += 30
        elif i == 2 and bisestile(a):
            giorno += 29
        elif i == 2 and not bisestile(a):
            giorno += 28
        print(f"{i}) {giorno} ")
    print(f"La data {g}-{m}-{a} corrisponde al {giorno}-mo giorno")
'''Dati giorno mese e anno restituisce la posizione della data nei 365 o 366 giorni di quell'anno'''

if __name__ == '__main__':
    g = int(input("giorno:"))
    m = int(input("mese:"))
    a = int(input("anno:"))
    ordinalDate(g, m, a)
