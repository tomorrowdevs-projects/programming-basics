# Develop a program that reads a four-digit integer from the user
# and displays the sum of its digits.
vettore = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
#print(vettore)
risp = str("N")
carattere = str(" ")
controllo = int(0)
#eseguo il ciclo while fino a quando il risultato della condizione è vero (risp = N or n)
#in questa versione al fine di eliminare gli operatori logici della prima versione ho utilizzato una lista per le vocali
while risp == "N" or risp == "n":
    carattere = input("Inserici una lettera >>> ")
    for i in vettore:
        if carattere == i:
            controllo = 1
    if controllo == 1:
        print("La lettera ", carattere, " inserita è una vocale")
    else:
        if carattere == "Y" or carattere == "y":
            print("La lettera ", carattere, "insertia è a volte una vocale e a volte una consononante")
        else:
            print("La lettera ", carattere, "inserita è una consonante")
    controllo = 0                   
    risp = str(input("Vuoi terminare il programma ? Digita N o n per continuare >>> "))
