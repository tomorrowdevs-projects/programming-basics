def data_magica(giorno, mese, anno):
    if (giorno * mese) == anno:
        return True
    return False


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


if __name__ == '__main__':
    mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre",
            "novembre", "dicembre"]
    for a in range(1900, 2000, 1):
        for m in mesi:
            if m in ["gennaio", "marzo", "maggio", "luglio", "agosto", "ottobre", "dicembre"]:
                for g in range(1, 32, 1):
                    if data_magica(g, mesi.index(m) + 1, a % 100):
                        print(f"{g:0>2}-{m}-{a}")
            elif m in ["novembre", "aprile", "giugno", "settembre"]:
                for g in range(1, 31, 1):
                    if data_magica(g, mesi.index(m) + 1, a % 100):
                        print(f"{g:0>2}-{m}-{a}")
            elif m == "febbraio":
                if bisestile(a):
                    for g in range(1, 30, 1):
                        if data_magica(g, mesi.index(m) + 1, a % 100):
                            print(f"{g:0>2}-{m}-{a}")
                else:
                    for g in range(1, 29, 1):
                        if data_magica(g, mesi.index(m) + 1, a % 100):
                            print(f"{g:0>2}-{m}-{a}")
