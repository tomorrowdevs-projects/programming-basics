def add_time(iniziale,durata,giorno=""):
    risultato=""
    days=["lunedì","martedì","mercoledì","giovedì","venerdì","sabato","domenica"]
    lista1=iniziale.split()
    lista2=lista1[0].split(":")
    ore=int(lista2[0])
    minuti=int(lista2[1])

    if lista1[1]=="PM":
        ore+=12
    lista3=durata.split(":")
    ore+=int(lista3[0])
    minuti+=int(lista3[1])
    min=minuti%60
    ore += minuti // 60
    o=ore%24
    giorni=ore//24
    if o>12:
        risultato+=f"{o-12}:{min:0>2} PM"
    elif o==12:
        risultato+=f"{o}:{min:0>2} PM"
    elif o==0:
        risultato += f"{o+12}:{min:0>2} AM"
    else:
        risultato += f"{o}:{min:0>2} AM"
    if giorno!="":
        indice = days.index(giorno.lower())
        if giorni==0:
            risultato+=f" {giorno.lower().capitalize()}"
        elif giorni==1:
            risultato += f" {days[indice+1] } (giorno successivo)"
        else:
            risultato += f" {days[indice+giorni]} ({giorni } giorni dopo)"
    else:
        if giorni==0:
            return risultato
        if giorni==1:
            risultato += f"  (giorno successivo)"
        else:
            risultato += f" ({giorni }  giorni dopo)"
    return risultato

if __name__=='__main__':
    iniziale=input("Inserisci un orario iniziale nel formato ore:minuti AM/PM: ")
    durata = input("Inserisci una durata nel formato ore:minuti : ")
    giorno=input("Inserisci (se vuoi) un giorno della settimana altrimenti premi invio ")
    print(add_time(iniziale,durata,giorno))