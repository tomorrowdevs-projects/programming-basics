

"""
conversione da anni umani ad anni canini.
Il programma dovrebbe visualizzare un messaggio di errore appropriato se l'utente immette un numero negativo.
"""

def anni_cane(anni_uomo):

    if anni_uomo > 2:
        anni_c = 2*10.5 + (anni_uomo-2)*4
    else:
        anni_c = 10.5*anni_uomo
    return anni_c


if __name__ == "__main__":

    anni_man = int(input("inserire gli anni umani "))
    while anni_man < 0:
        print("il numero deve essere > 0")
        anni_man = int(input("inserire gli anni umani "))
print( "equivalente anni di un cane ", anni_cane(anni_man))

