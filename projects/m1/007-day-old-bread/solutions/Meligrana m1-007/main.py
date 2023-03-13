def costo_pane(c):
    '''calcola il costo di un certo numero di pagnotte con e senza sconto'''
    s = int(input("Numero di pagnotte acquistate "))
    '''Costo totale'''
    p=s*3.49
    '''Sconto totale'''
    sconto=0.6*p
    '''Prezzo scontato'''
    ps=p-sconto
    a="Costo totale:    {0:>10}\n".format(round(p,2))
    b ="Sconto totale:   {0:>10}\n".format(round(sconto,2))
    d ="Prezzo scontato: {0:>10}".format(round(ps,2))
    print(a+b+d)
    return
if __name__=='__main__':
    c=0
    costo_pane(c)
