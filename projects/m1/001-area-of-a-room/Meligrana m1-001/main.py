def AreaStanza():
    '''calcola l'area di un rettangolo di lati b e h'''
    b=float(input('Inserisci la larghezza '))
    h = float(input('inserisci la lunghezza '))
    a=f"L'area della stanza misura {b*h!r} mq."
    print(a)
    return


if __name__=='__main__':
    AreaStanza()
