def secondi():
    '''converte in  giorni:ore:minuti:secondi un numero di secondi '''
    s = int(input("Numero di secondi "))
    secondi=s%60
    minuti =s//60
    ore=minuti//60
    minuti=minuti%60
    giorni=ore//24
    ore=ore%24
    a="{0:2}:{1:2}:{2:2}:{3:2}".format(giorni,ore,minuti,secondi)
    print(a)
    return
if __name__=='__main__':
    secondi()
