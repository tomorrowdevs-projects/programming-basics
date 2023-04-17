"""programma che legge il nome di un mese dall'utente come una stringa.
il programma  visualizza il numero di giorni in quel mese.
Visualizza "28 o 29 giorni" per febbraio per gli anni bisestili.
"""
from unittest import case


def day_month(mese):

    match mese:
        case "gennaio":
            return "31"
        case "febbraio":
            return"28/29"
        case "marzo":
            return "31"
        case "aprile":
            return "30"
        case "maggio":
            return "31"
        case "giugno":
            return "30"
        case "luglio":
            return "31"
        case "agosto":
            return "31"
        case "settembre":
            return "30"
        case  "ottobre":
            return "31"
        case "novembre":
            return "30"
        case "dicembre":
            return "31"

if __name__ == "__main__":
    mes = input("inserire il nome del mese ")
    print("il numero di giorni del mese di ", mes," è di ", day_month(mes))