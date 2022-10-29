# inserimento larghezza
print("insert width of the room in meters:")
width = float(input())

# inserimento lunghezza
print("insert lenght of the room in meters:")
lenght = float(input())

area = str(round(width * lenght, 3))

# stampa risultato
if((width * lenght) != 1):
    print("Area of the room is: " + area + " meters")
else:
    print("Area of the room is: " + area + " meter")



