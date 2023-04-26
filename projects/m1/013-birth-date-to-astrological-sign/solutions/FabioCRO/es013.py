"""inserisce il giorno e il mese di nascita
e determina il segno zodiacale"""
giorno_nascita=int(input("inserisci il giorno del tuo compleanno: "))
mese_nascita=input("inserisci il mese del tuo compleanno: ").lower()
if mese_nascita == "gennaio":
    if giorno_nascita>=20:
        segno = "Acquario"
    else:
        segno="Capricorno"
elif mese_nascita == "febbraio":
    if giorno_nascita>=19:
        segno="pesce"
    else:
        segno="Acquario"
elif mese_nascita == "marzo":
        if giorno_nascita >= 21:
            segno = "ariete"
        else:
            segno = "pesce"

elif mese_nascita == "aprile":
            if giorno_nascita >= 20:
                segno = "toro"
            else:
                segno = "ariete"
elif mese_nascita == "maggio":
        if giorno_nascita>= 21:
            segno = "gemelli"
        else:
            segno = "toro"

elif mese_nascita == "giugno":
    if giorno_nascita >= 21:
        segno= "cancro"
    else:
        segno = "gemelli"

elif mese_nascita == "luglio":
    if giorno_nascita >= 23:
        segno = "leone"
    else:
        segno = "cancro"
elif mese_nascita == "agosto":
    if giorno_nascita >= 23:
        segno = "vergine"
    else:
        segno = "leone"
elif mese_nascita == "settembre":
    if giorno_nascita >= 23:
        segno = "bilancia"
    else:
        segno = "vergine"

elif mese_nascita == "ottobre":
    if giorno_nascita >= 23:
        segno = "scorpione"
    else:
        segno = "bilancia"

elif mese_nascita == "novembre":
    if giorno_nascita >= 22:
        segno = "sagittario"
    else:
        segno = "scorpione"

elif mese_nascita == "dicembre":
    if giorno_nascita >= 22:
        segno = "capricorno"
    else:
        segno = "sagittario"

print(f"Il tuo segno zodiacale è il {segno}")