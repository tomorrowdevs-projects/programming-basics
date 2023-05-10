"""
In a particular jurisdiction, taxi fares consist of a base fare of €4.00,
plus €0.25 for every 140 meters travelled.
Write a function that takes the distance travelled (in kilometers)
as its only parameter and returns the total fare as its only result.
Write a main program that demonstrates the function.

"""
def calcola(a):
    return int(a/140)*0.25+4.00

d=float(input("Insert distance in meters:"))
s=calcola(d)
print(f"Il costo per {d} m percorsi è {s:.2f} €")
