def conversione(c=0):
    '''converte i centesimi in valuta canadese'''
    x=c
    toonies=0
    loonies=0
    quarters=0
    dimes=0
    nickels=0
    if c>200 or c==200:
        toonies=c//200
        c=c%200
    if c>100 or c==100:
        loonies=c//100
        c=c%100
    if c>25 or c==25:
        quarters=c//25
        c=c%25
    if c>10 or c==10:
        dimes=c//10
        c=c%10
    if c>5 or c==5:
        nickels=c//5
        c=c%5
    q=f"{x!r} cents equivalgono a \n {toonies!r} toonies \n {loonies!r} loonies \n {quarters!r} quarters \n {dimes!r} dimes \n {nickels!r} nickels \n {c!r} pennies"
    print(q)
    return

if __name__=='__main__':
    c = int(input('Inserisci il numero di centesimi '))
    conversione(c)
