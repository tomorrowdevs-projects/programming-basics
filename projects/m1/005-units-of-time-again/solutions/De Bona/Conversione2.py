second= int (input("Inserisci un valore in secondi e sarà convertito in ore, munuti e secondi "))
print (second,"secondi sono pari a:")
print ("Giorni: Ore : Minuti: Secondi")
day= second //(24*3600)
second = second % (24*3600)
print ( '{0:2d}: '.format(day),end="   ")

hour= second //3600
second=second % 3600
print ( '{0:2d} :'.format(hour),end="  ")
minute=second //60
second =second % 60
print ( '{0:2d}: '.format(minute),end="    ")
print ( '{0:2d} '.format(second),end="    ")
