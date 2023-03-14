def anniCane(anni_umani=0):
    '''Converte anni umani in anni cane'''

    if anni_umani<0:
        print('Numero di anni non valido')
    elif anni_umani==0:
        print('0 anni umani corrispondono a 0 anni del cane')
    else:
        print(f"{anni_umani} anni dell'uomo corrispondono a {10.5+(anni_umani-1)*4} anni del cane")
    return

if __name__=='__main__':
    anni_umani = int(input('Inserisci un numero di anni umani '))
    anniCane(anni_umani)