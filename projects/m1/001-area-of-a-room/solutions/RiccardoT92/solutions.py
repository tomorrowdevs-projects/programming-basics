#Write a program that asks the user to enter the width and length of a room. Once these values have been read, your program should compute and display the area of the room. 
#The length and the width will be entered as floating-point numbers. Include units in your prompt and output message; either feet or meters, depending on which unit you are more comfortable working with.

#Inserisco la base
Base=float(input("Inserire Base in metri: "))
#Inserisco Altezza
Altezza=float(input("inserire Altezza in metri: ","Metri"))
#Calcolo Area
Area=Base*Altezza
#Stampo risultato
print("Area_rettangolo: ",Area,"Metri Quadri")

    