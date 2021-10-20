C=16.35        
D=18.35   
E=20.60 
F=21.83
G=24.50
A=27.50
B=30.87
notes =input("inserisci una nota (C,D,E,F,G,A,B) con il valore di un ottava (da 0 fino a 9) : ")
if (notes[0]==("C")):
	if (int(notes[1])!=0):
		frequency=C*pow (2,int(notes[1]))
	else :
		frequency=C
	print("la nota " + str(notes)+ " ha una frequeza di : " + str(frequency))
elif (notes[0]==("D")):
	if (int(notes[1])!=0):
		frequency=D*pow(2,int(notes[1]))
	else :
		frequency=D
	print("la nota " + str(notes)+ " ha una frequeza di : " + str(frequency))
elif (notes[0]==("E")):
	if (int(notes[1])!=0):
		frequency=E*pow(2,int(notes[1]))
	else :
		frequency=E
	print("la nota " + str(notes)+ " ha una frequeza di : " + str(frequency))
elif (notes[0]==("F")):
	if (int(notes[1])!=0):
		frequency=F*pow(2,int(notes[1]))
	else :
		frequency=F
	print("la nota " + str(notes)+ " ha una frequeza di : " + str(frequency))
elif (notes[0]==("G")):
	if (int(notes[1])!=0):
		frequency=G* pow(2,int(notes[1]))
	else :
		frequency=G
	print("la nota " + str(notes)+ " ha una frequeza di : " + str(frequency))
elif (notes[0]==("A")):
	if (int(notes[1])!=0):
		frequency=A*pow(2,int(notes[1]))
	else :
		frequency=A
	print("la nota " + str(notes)+ " ha una frequeza di : " + str(frequency))
elif (notes[0]==("B")):
	if (int(notes[1])!=0):
		frequency=B*pow(2,int(notes[1]))
	else :
		frequency=B
	print("la nota " + str(notes)+ " ha una frequeza di : " + str(frequency))
else :
	print("il valore inserito non è una nota")