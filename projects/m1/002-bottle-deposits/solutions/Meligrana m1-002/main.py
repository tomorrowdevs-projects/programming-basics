def deposito():
    '''Calcola il totale delle cauzioni versate per acquistare bottiglie di capacità varia'''
    c1=float(input('Bottiglie di capacità<=1 litro '))
    c2=float(input('Bottiglie di capacità>1 litro '))
    deposito=c1*0.10+c2*0.25
    d=f"deposito restituito={round(deposito,2)} $"
    print(d)
    return
if __name__=='__main__':
    deposito()