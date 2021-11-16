year = int(input('enter the year: '));
month = int(input('enter the month: '));
day = int(input('enter the day: '));
def increase (y,m,d):
    #creazione delle liste per differenziare i mesi con 31 giorni e quelli con 30 giorni il mese di febbraio non serve in quanto è unico 
    thirtyone = [1,3,5,7,8,10,12]
    thirty = [4,6,9,11]
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
        #caso speciale per i mesi bisestili, dato le condizioni delle 2 altrimenti lasciando solo m == 2 avr
        elif m == 2 and d > 27 and d < 30:
            if d == 28:
                #formula presa dall'esercio per cui dava i criteri di un anno bisestile, per cui ogni numero divisibile per 400 è bise di quelli rimanenti se non sono divisibili per 100 sono divisibili ed i rimanenti se sono divisibili per 4 allora sono bise
                if y % 400 == 0 or y % 400 != 0 and y % 100 != 0 or y % 400 != 0 and y % 100 == 0 and y % 4 == 0:
                    d = d + 1
                else:
                    d = 1
                    m = m + 1
            #messo la condizione per cui il numero se fosse 29 feb
            elif d == 29:
                if y % 400 == 0 or y % 400 != 0 and y % 100 != 0 or y % 400 != 0 and y % 100 == 0 and y % 4 == 0:
                    d = 1
                    m = m + 1
        else:
            d = d + 1
    if m > 12:
        m = 1
        y = y + 1
    print(str(y) + '-' + "%02d" %m + '-' + "%02d" %d)
increase(year,month,day)