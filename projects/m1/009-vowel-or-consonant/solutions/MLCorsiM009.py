# Develop a program that reads a four-digit integer from the user
# and displays the sum of its digits.
risp = str("N")
carattere = str(" ")
#eseguo il ciclo while fino a quando il risultato della condizione è vero (risp = N or n)
while risp == "N" or risp == "n": 
    carattere = input("Inserisci una lettera dell'alfabeto >>> ")
    if carattere == "A" or carattere == "a" or carattere == "E" or carattere == "e" or carattere == "I" or carattere == "i" or carattere == "O" or carattere == "o" or carattere == "U" or carattere == "u":
        print("Hai inserito una vocale >>>", carattere)
    else:
        if carattere == "Y" or carattere == "y":
            print("Il carattere ", carattere, " inserito è a volte una vocale e a volte una consonante")
        else:
            print("Il carattere ", carattere, " inserito è una consonante")        
    print(">>>")
    print(">>>")
    print(">>>")
    risp = str(input("Vuoi terminare il programma ? Digita N o n per continuare >>> "))
