year = int(input('enter the year: '));
month = int(input('enter the month: '));
day = int(input('enter the day: '));
thirtyone = [1,3,5,7,8,10,12]
thirty = [4,6,9,11]
def leap (x):
    if x % 400 == 0 or x % 400 != 0 and x % 100 != 0 or x % 400 != 0 and x % 100 == 0 and x % 4 == 0:
        return 29
    else:
        return 28
def increase (y,m,d):
    #creazione delle liste per differenziare i mesi con 31 giorni e quelli con 30 giorni il mese di febbraio non serve in quanto è unico 
    #i controlli per i dati inseriti
    if d < 1 or d > 31 or m < 1 or m > 12:
        print('Error')
    #controllo per il mese di febbraio che non sia superiore di 29 utilizzato per il return per interrompere il if condition
    elif m == 2 and d > 29:
        print('Error')
        return 
    else:
        if m in thirtyone and d == 31 or m in thirty and d == 30:
            d = 1
            m = m + 1
        elif m == 2:
            if d == leap(y):
                d = 1
                m = m + 1
            else:
                d = d + 1 
        else:
            d = d + 1
    if m > 12:
        m = 1
        y = y + 1
    nextdate = (str(y) + '-' + "%02d" %m + '-' + "%02d" %d)
    return nextdate
print(increase(year,month,day))