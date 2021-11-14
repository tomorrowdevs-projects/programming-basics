month =input("inserisci un mese  ")
if (month =="gennaio" or month== "marzo"or month== "maggio" or month=="luglio" or month=="agosto"or month=="ottobre "or month=="dicembre"):
	print ("il mese ha 31 giorni")
elif (month =="aprile" or month=="giugno"or month=="settembre"or month=="novembre"):
	print ("il mese ha 30 giorni")
elif (month =="febbraio"):
	print ("il mese ha 28 giorni o 29 giorni negli anni bisesitili")
else :
	print("il valore inserito non e un mese")