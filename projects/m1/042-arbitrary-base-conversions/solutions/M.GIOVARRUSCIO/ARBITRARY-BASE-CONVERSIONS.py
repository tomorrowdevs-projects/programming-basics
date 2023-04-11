"""
Write a program that allows the user to convert a number from one base to another.
Your program should support bases between 2 and 16 for both the input number and the result number.
If the user chooses a base outside of this range then an appropriate error message should be
displayed and the program should exit.
Divide your program into several functions,
including a function that converts from an arbitrary base to base 10,
a function that converts from base 10 to an arbitrary base,
and a main program that reads the bases and input number from the user.

"""
#Questa funzione converte da un numero in base 10 ad una base arbitraria
def from10tox(number,base):
    new = "" #variabile che conterrà il risultato finale della conversione
    #simboli utilizzabili in funzione della base di arrivo
    simbol = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    #si parte con la prima divisione del numero decimale con la base di arrivo
    rest = number % base #resto della divisione
    quotient = number // base  # quoziente della divisione
    new = f"{simbol[rest]}" + new #concatenazione della prima divisione al valore iniziale
    #ciclo
    while(quotient!=0):
        rest = quotient % base
        quotient = quotient // base
        new = f"{simbol[rest]}" + new #concatenazione al risultato precedente
    return new
#Questa funzione converte da una qualsiasi base a base 10
def fromxto10(num,base):
    alf = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    j=0 #esponente della potenza avente come base quella di partenza
    new=0 #variabile che conterrà il numero convertito (risultato)
    num=num.upper()
    for i in range(len(str(num))-1,-1,-1):
        new+=(alf.index(num[i]))*base**j
        j+=1
    return new
#Questa funzione determinare la chiusura del programma nel caso di inserimento
#di valori per le due basi oggetto di conversione fuori dal range (2,16)
def error_message(val):
    if val<2 or val>16:
        return True
    else:
        return False

if __name__ == '__main__':
    number=input("Numero da convertire: ")
    start=int(input("Base di partenza: "))
    if error_message(start):
        print("ERRORE: La base di partenza deve essere compresa tra 2 e 16")
        quit()
    arrive=int(input("Base di arrivo: "))
    if error_message(arrive):
        print("ERRORE: La base di arrivo deve essere compresa tra 2 e 16")
        quit()
    intermediate=fromxto10(number, start)
    finish=from10tox(int(intermediate),arrive)
    print(f" {number} in base {start} è uguale a {finish} in base {arrive}")
