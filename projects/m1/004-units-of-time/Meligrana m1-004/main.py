def secondi():
    '''converte in secondi giorni,ore,minuti,secondi '''
    g = int(input("giorni\n"))
    o = int(input("ore\n"))
    m = int(input("minuti\n"))
    s = int(input("secondi\n"))
    ore=g*24+o
    minuti=ore*60+m
    secondi=minuti*60+s
    a=f" Sono {secondi!r} secondi."
    print(a)
    return

if __name__=='__main__':
    secondi()
