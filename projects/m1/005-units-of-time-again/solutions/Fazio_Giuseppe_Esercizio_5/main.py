# calcolo giorni, ore, minuti, secondi dato un ammontare di secondi in input D:HH:MM:SS
secondi = int(input ("inserisci il  valore dei secondi: "))

giorni = int(secondi/86400)
secondi = secondi%86400
print ("giorni =" , giorni)

ore= int (secondi/3600)
secondi= secondi%3600
print ("ore =" , ore)

minuti =int(secondi /60)
secondi= secondi%60
print ("minuti  =" , minuti)
print ("secondi  =" , secondi)


result = int

o = (str(ore).zfill(2))

m = (str(minuti).zfill(2))

s = (str(secondi).zfill(2))


print (str (giorni)+":"+o+":"+m+":"+s)




