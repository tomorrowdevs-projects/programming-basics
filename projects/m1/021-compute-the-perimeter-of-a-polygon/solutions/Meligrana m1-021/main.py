import math
'''Calcola il perimetro di un poligono'''

def distanza(x1, y1, x2, y2):
    return math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)


if __name__ == '__main__':
    primax = int(input("Inserisci la prima ascissa: "))
    primay = int(input("Inserisci la prima ordinata: "))
    perimetro = 0.0
    px = primax
    py = primay
    x = input("Inserisci la successiva ascissa (invio per uscire): ")
    while (x != ""):
        y = int(input("Inserisci la successiva ordinata: "))
        perimetro += distanza(px, py, int(x), y)
        px = int(x)
        py = y
        x = input("Inserisci la successiva ascissa (invio per uscire): ")
    perimetro += distanza(px, py, primax, primay)
    print('Il perimetro di questo poligono è ', perimetro)
