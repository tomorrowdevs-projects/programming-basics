C=16.35        
D=18.35   
E=20.60 
F=21.83
G=24.50
A=27.50
B=30.87
notes =input("inserisci una nota (C,D,E,F,G,A,B) con il valore di un ottava (da 0 fino a 9) : ")
if (notes.upper()[0]==("C")):
	temp=C
elif (notes.upper()[0]==("D")):
	temp=D
elif (notes.upper()[0]==("E")):
	temp=E
elif (notes.upper()[0]==("F")):
	temp=F
elif (notes.upper()[0]==("G")):
	temp=G
elif (notes.upper()[0]==("A")):
	temp=A
elif (notes.upper()[0]==("B")):
	temp=B
else :
	print("il valore inserito non � una nota")

if (int(notes[1])!=0):
		frequency=temp*pow(2,int(notes[1]))
else :
	frequency=temp
print("la nota " + str(notes)+ " ha una frequeza di : " + str(frequency))