# Develop a program that reads a four-digit integer from the user
# and displays the sum of its digits.
annic = input("Inserisci il numero di anni del tuo cane >>> ")
# caso non possibile
if float(annic) < 1:
    print("Il calcolo non è possibile")
# casi possibili    
else:
    if float(annic) >= 2:
        annic = float(annic) - 2
        adult = 2 * 10.5
        annic = annic * 4
        annic = adult + annic
        print(annic)
    else:
        annic = float(annic) * 10.5
        print(annic)
