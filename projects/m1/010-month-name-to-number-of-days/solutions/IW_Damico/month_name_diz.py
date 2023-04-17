mese_dic = {"gennaio": "31", "febbraio": "28/29", "marzo": "31", "aprile": "30", "maggio": "31",
            "giugno": "30", "luglio":  "31", "agosto": "31", "settembre": "30", "ottobre": "31",
            "novembre": "30", "dicembre": "31"}

app = mese_dic.get(input("inserire il mese "))
print(" il mese di {:}"app)