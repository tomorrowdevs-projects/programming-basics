mese_dic = {"gennaio": "31", "febbraio": "28/29", "marzo": "31", "aprile": "30", "maggio": "31",
            "giugno": "30", "luglio":  "31", "agosto": "31", "settembre": "30", "ottobre": "31",
            "novembre": "30", "dicembre": "31"}
mese = input("inserire il mese ")
app = mese_dic.get(mese)
print(" il mese di {0} è di {1} giorni " .format(mese, app))