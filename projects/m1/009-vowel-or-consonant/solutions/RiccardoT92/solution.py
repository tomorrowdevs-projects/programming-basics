#In this exercise you will create a program that reads a letter of the alphabet from the user. 
#If the user enters a, e, i, o or u then your program should display a message indicating that the entered letter is a vowel. 
#If the user enters y then your program should display a message indicating that sometimes y is a vowel, and sometimes y is a consonant. 
#Otherwise your program should display a message indicating that the letter is a consonant.



#inserisco la lettera
lettera_alfabeto=input("inserisci lettera alfabeto: ")
#inizializzo variabile con all'interno la stringa delle vocali
vocali="aeiou"
#faccio i vari controlli con if ed else
if lettera_alfabeto in vocali:
    print("La lettera inserita è una vocale")
else:
    print("la lettera inserita è una consonante")