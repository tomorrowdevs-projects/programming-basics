#funzione per calcolare il perimetro, la formula "https://www.mathsisfun.com/algebra/distance-2-points.html"
def perimeter (list):
    import math
    totperimeter = 0
    for x in list:
        index = list.index(x)
        per = math.sqrt(((int(list[index+1][0]) - int(x[0])) ** 2) + ((list[index+1][1] - x[1]) ** 2))
        totperimeter = totperimeter + per
    return totperimeter
#richiesta iniziale delle coordinate
basex = int(input('Enter the first x-coordinate: '))
basey = int(input('Enter the first y-coordinate: '))
#creazione della lista con liste messa 2 volte così mi basta inserire le nuove coordinate in len(lista)-1
coordinates = [[basex,basey],[basex,basey]]
new_x = input('Enter the next x-coordinate (blank to quit): ')
#primo controllo che non ci sia uno spazio
if new_x == ' ':
    print(perimeter(coordinates))
else:
    new_y = int(input('Enter the next y-coordinate: '))
    #inserimento delle coordiante nella penultima posizione
    coordinates.insert(len(coordinates) -1, [new_x,new_y])
    #inizio ciclo per continuare a  immettere coordinate
    while new_x != ' ':
        new_x = input('Enter the next x-coordinate (blank to quit): ')
        if new_x == ' ':
            break
        new_y = int(input('Enter the next y-coordinate: '))
        coordinates.insert(len(coordinates) -1, [new_x,new_y])
    print(coordinates)
    print('The perimeter is: ' + str(perimeter(coordinates)))
