#Saluto l'user e gli chiedo di inserire la larghezza e la lunghezza della stanza
print("Hello there! Let's calculate this room's area!")

width = input("Enter the width of the room in meters: ")
lenght = input("Enter the lenght of the room in meters: ")

#Preannuncio il risultato
print("Here is the result!")

#Creo una funzione in cui scrivo una variabile (risultato della moltiplicazione della larghezza e lunghezza della stanza sottoforma di float)
#Nell'ultima parte della funzione, arrotondo il risultato, limitando i numeri decimali a 2.
def result():
    areaRoom = float(width) * float(lenght)
    print(round(areaRoom, 2))

result()