from math import sqrt

x = first_x = float(input("Enter the first x-coordinate: "))
y = first_y = float(input("Enter the first y-coordinate: "))
perimeter = 0 

next_x = input("Enter the next x-coordinate (blank to quit): ")

while next_x != "":
    next_x = float(next_x)
    next_y = float(input("Enter the next y-coordinate: "))
    lato = sqrt((next_x - first_x)**2 + (next_y - first_y)**2)    # Calcolo distanza tra due punti x e y.
    perimeter += lato
    first_x = next_x    # Trasformo il first_x e first_y in next_x e next_y perchè ogni coordinata x,y
    first_y = next_y    # addizionale deve essere calcolata con la coordinata inserita precedentemente.

    next_x = input("Enter the next x-coordinate (blank to quit): ")

ultimo_lato = sqrt((first_x - x)**2 + (first_y - y)**2)    # Calcolo distanza ultima coordinata inserita con la prima coordinata inserita.
perimeter += ultimo_lato
print(("The perimeter is {}") .format(perimeter))
