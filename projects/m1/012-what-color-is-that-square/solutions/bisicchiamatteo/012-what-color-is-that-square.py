PAIR="01010101"  
ODD="10101010" 

coordinates =input("inserisci una coordinata della scacchiera : ")
if ((coordinates[0].upper()==("A")) or (coordinates[0].upper()==("C"))or (coordinates[0].upper()==("E"))or (coordinates[0].upper()==("G"))):
	x=PAIR
	
elif ((coordinates[0].upper()==("B")) or (coordinates[0].upper()==("D"))or (coordinates[0].upper()==("F"))or (coordinates[0].upper()==("H"))):
	x=ODD
	
else :
	print("il valore inserito non e una cordinata")
y=int(coordinates[1])-1
if (int (x[y])!=1):
		print ("il colore della casella � nero")
else :
		print ("il colore della casella � bianco")
