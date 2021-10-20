A="10101010"        
B="01010101"  
C="10101010" 
D="01010101" 
E="10101010" 
F="01010101" 
G="10101010" 
H="01010101" 
coordinates =input("inserisci una nota della scacchiera : ")
if (coordinates[0]==("A")):
	position=int(coordinates[1])
	color=A[position-1]
	if (int(color)!=1):
		print ("il colore della casella è bianco")
	else :
		print ("il colore della casella è nero")
elif (coordinates[0]==("B")):
	position=int(coordinates[1])
	color=B[position-1]
	if (int(color)!=1):
		print ("il colore della casella è bianco")
	else :
		print ("il colore della casella è nero")
elif (coordinates[0]==("C")):
	position=int(coordinates[1])
	color=C[position-1]
	if (int(color)!=1):
		print ("il colore della casella è bianco")
	else :
		print ("il colore della casella è nero")
elif (coordinates[0]==("D")):
	position=int(coordinates[1])
	color=D[position-1]
	if (int(color)!=1):
		print ("il colore della casella è bianco")
	else :
		print ("il colore della casella è nero")
elif (coordinates[0]==("E")):
	position=int(coordinates[1])
	color=E[position-1]
	if (int(color)!=1):
		print ("il colore della casella è bianco")
	else :
		print ("il colore della casella è nero")
elif (coordinates[0]==("F")):
	position=int(coordinates[1])
	color=F[position-1]
	if (int(color)!=1):
		print ("il colore della casella è bianco")
	else :
		print ("il colore della casella è nero")
elif (coordinates[0]==("G")):
	position=int(coordinates[1])
	color=G[position-1]
	if (int(color)!=1):
		print ("il colore della casella è bianco")
	else :
		print ("il colore della casella è nero")
elif (coordinates[0]==("H")):
	position=int(coordinates[1])
	color=H[position-1]
	if (int(color)!=1):
		print ("il colore della casella è bianco")
	else :
		print ("il colore della casella è nero")
	
else :
	print("il valore inserito non è una nota")